const parseSeoTags = (seoCode, title) => {
  if (!seoCode) {
    return {
      title,
      meta: []
    };
  }
  const metaRegex = /<meta[^>]+>/g;
  const matches = seoCode.match(metaRegex) || [];
  const meta = matches.map((tag) => {
    const nameMatch = tag.match(/name="([^"]+)"/);
    const contentMatch = tag.match(/content="([^"]+)"/);
    const propertyMatch = tag.match(/property="([^"]+)"/);
    const httpEquivMatch = tag.match(/http-equiv="([^"]+)"/);
    return {
      name: nameMatch ? nameMatch[1] : null,
      content: contentMatch ? contentMatch[1] : null,
      property: propertyMatch ? propertyMatch[1] : null,
      "http-equiv": httpEquivMatch ? httpEquivMatch[1] : null
    };
  }).filter((meta2) => meta2.name || meta2.property || meta2["http-equiv"]);
  return {
    title,
    meta
  };
};
export {
  parseSeoTags as p
};
