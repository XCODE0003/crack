const parseSeoTags = (seoCode, title) => {
    if (!seoCode) {
        return {
            title,
            meta: [],
        };
    }

    const metaRegex = /<meta[^>]+>/g;
    const matches = seoCode.match(metaRegex) || [];

    const meta = matches
        .map((tag) => {
            const nameMatch = tag.match(/name="([^"]+)"/);
            const contentMatch = tag.match(/content="([^"]+)"/);
            const propertyMatch = tag.match(/property="([^"]+)"/);
            const httpEquivMatch = tag.match(/http-equiv="([^"]+)"/);

            return {
                name: nameMatch ? nameMatch[1] : null,
                content: contentMatch ? contentMatch[1] : null,
                property: propertyMatch ? propertyMatch[1] : null,
                "http-equiv": httpEquivMatch ? httpEquivMatch[1] : null,
            };
        })
        .filter((meta) => meta.name || meta.property || meta["http-equiv"]);

    return {
        title,
        meta,
    };
};


export const formatUrl = (url) => {
    // Convert URL to lowercase
    url = url.toLowerCase();

    // Replace spaces with hyphens
    url = url.replace(/\s+/g, '-');

    // Remove special characters
    url = url.replace(/[^a-z0-9\-]/g, '');

    // Remove multiple hyphens
    url = url.replace(/-+/g, '-');

    // Remove leading and trailing hyphens
    url = url.replace(/^-+|-+$/g, '');

    return url;
};

export { parseSeoTags };
