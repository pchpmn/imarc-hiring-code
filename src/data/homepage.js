const config = require('./globalConfig');

const meta = {
      "title": "imarc | Hiring Exercise",
      "description": "imarc hiring excercise by Paul Chapman."
    }
    
const homepage = {
    "metatags": {
        "preventIndexing": config.preventIndexing,
        "lang": "en",
        "title": meta.title,
        "description": meta.description,
        "image": config.address + "/images/Logo.png",
        "ogTitle": meta.title,
        "ogDescription": meta.description,
        "ogSiteName": "My company",
        "ogUrl": config.address,
        "twitterTitle": meta.title,
        "twitterDescription": meta.description
    },
    "title": "iMarc Test program",
    "hero": {
      "title": "Lorem Ipsum",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "image": "/images/hero_image-min.jpg",
      "imageAlt": "Smiling woman."
    },
    "knownFor": {
        "title": "We’re known for:",
        "icons": [
            {
                "title": "Leadership<br/>Development",
                "slug": "leadershipdevelopment",
                "url": "#"
            },
            {
                "title": "Technology &amp;<br/>Development",
                "slug": "techdevelopment",
                "url": "#"
            },
            {
                "title": "Compliance",
                "slug": "compliance",
                "url": "#"
            }
        ]
    },
    "waysLearn": {
        "title": "Ways you can learn",
        "icons": [
            {
                "title": "Mobile Devices",
                "slug": "mobile-devices"
            },
            {
                "title": "Ebooks",
                "slug": "ebooks"
            },
            {
                "title": "Live Learning",
                "slug": "live-learning"
            }
        ]
    }
    
}

module.exports = homepage;