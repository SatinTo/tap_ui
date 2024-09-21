const fs = require("fs-extra");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const libDirectory = path.join(srcDir, "lib");
const distDir = path.join(__dirname, "../dist/lib/flag");

// Function to read directory and filter for .ts and .tsx files
function getTsFiles(dir) {
    const files = fs.readdirSync(dir);
    let tsFiles = [];

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            tsFiles = tsFiles.concat(getTsFiles(fullPath)); // Recurse into subdirectories
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            tsFiles.push(fullPath);
        }
    });

    return tsFiles;
}

async function getPngFilesFromTsContent(tsFiles) {
    const pngFiles = new Set();
    const regex = /require\(['"](\.\/flag\/.*\.png)['"]\)/g;

    for (const file of tsFiles) {
        try {
            const content = await fs.readFile(file, "utf-8");
            let match;
            while ((match = regex.exec(content)) !== null) {
                const pngFile = match[1];
                const absolutePngPath = path.join(libDirectory, pngFile);
                if (await fs.pathExists(absolutePngPath)) {
                    pngFiles.add(absolutePngPath);
                } else {
                    console.warn(`File not found: ${absolutePngPath}`);
                }
            }
        } catch (error) {
            console.error(`Error reading file ${file}:`, error);
        }
    }
    return pngFiles;
}

async function copyRequiredAssets() {
    console.time('Asset copy time');
    try {
        const tsFiles = getTsFiles(srcDir);
        const pngFilesToCopy = await getPngFilesFromTsContent(tsFiles);

        // Ensure the destination directory exists
        await fs.ensureDir(distDir);

        // Copy each .png file to the dist folder
        for (const pngFile of pngFilesToCopy) {
            const destination = path.join(distDir, path.basename(pngFile));
            await fs.copy(pngFile, destination);
            console.log(`Copied ${pngFile} to ${destination}`);
        }

        console.log(`Copied ${pngFilesToCopy.size} PNG files`);
    } catch (error) {
        console.error("Error:", error);
    }
    console.timeEnd('Asset copy time');
}

copyRequiredAssets();