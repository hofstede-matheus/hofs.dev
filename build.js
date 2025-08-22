const fs = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const chokidar = require('chokidar');

const SRC_DIR = path.join(__dirname, 'src');
const PUBLIC_DIR = path.join(__dirname, 'public');
const VIEWS_DIR = path.join(SRC_DIR, 'views');
const PARTIALS_DIR = path.join(SRC_DIR, 'partials');

// Build configuration for different pages
const PAGES = [
  {
    template: 'index.ejs',
    output: 'index.html',
    data: {
      title: 'CollectIn — LinkedIn Saved Posts Collection',
      description: 'Turn your LinkedIn saved posts into neatly labeled collections. Inline badges, fast filters, and private local storage. No account required.',
      baseUrl: '.'
    }
  },
  {
    template: 'help.ejs',
    output: 'help/index.html',
    data: {
      title: 'Help - CollectIn — LinkedIn Saved Posts Collection',
      description: 'Help page for CollectIn, explaining each functionality of the app.',
      baseUrl: '..'
    }
  }
];

async function buildPage(page) {
  try {
    const templatePath = path.join(VIEWS_DIR, page.template);
    const outputPath = path.join(PUBLIC_DIR, page.output);
    
    // Ensure output directory exists
    await fs.ensureDir(path.dirname(outputPath));
    
    // Set EJS options to include partials directory
    const options = {
      views: [VIEWS_DIR, PARTIALS_DIR],
      filename: templatePath
    };
    
    // Render the template
    const html = await ejs.renderFile(templatePath, page.data, options);
    
    // Write the output
    await fs.writeFile(outputPath, html);
    console.log(`✓ Built ${page.output}`);
    
  } catch (error) {
    console.error(`✗ Error building ${page.template}:`, error.message);
  }
}

async function buildAll() {
  console.log('Building EJS templates...');
  
  for (const page of PAGES) {
    await buildPage(page);
  }
  
  console.log('✓ Build complete!');
}

async function watch() {
  console.log('Watching for changes...');
  
  const watcher = chokidar.watch(SRC_DIR, {
    ignored: /node_modules/,
    persistent: true
  });
  
  watcher.on('change', (filePath) => {
    console.log(`File changed: ${filePath}`);
    buildAll();
  });
  
  // Initial build
  await buildAll();
}

// Run build or watch mode
const isWatchMode = process.argv.includes('--watch');

if (isWatchMode) {
  watch();
} else {
  buildAll();
}
