const phantom = require('phantom');

function grabRenderedContent(route, options) {
    return new Promise((resolve) => {
        phantom.create().then((ph) => {
            ph.createPage().then((page) => {
                page.open(route).then(() => {
                    page.property('content').then((content) => {
                        if (options.clean) {
                            content = stripScriptTags(content);
                        }
                        resolve(content);
                    });
                });
            });
        });
    });
}

function stripScriptTags(body) {
    return body.replace(/(\<script.*\>.*?\<\/script\>)/, '');
}

exports.grab = grabRenderedContent;