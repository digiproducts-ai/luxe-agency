import { z } from 'zod';
export const schemas = {
  home: z.object({
    "hero": z.object({
      "headline": z.string(),
      "subheadline": z.string(),
      "ctaLabel": z.string(),
      "ctaUrl": z.string()
    }),
    "blaze": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "description": z.string(),
      "traits": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "detail": z.string()
      }))
    }),
    "features": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "description": z.string(),
        "icon": z.string()
      }))
    }),
    "testimonials": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "quote": z.string(),
        "author": z.string(),
        "location": z.string()
      }))
    }),
    "cta": z.object({
      "headline": z.string(),
      "subheadline": z.string(),
      "ctaLabel": z.string(),
      "ctaUrl": z.string()
    })
  }),
  luxe_ignite: z.object({
    "hero": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "ctaLabel": z.string(),
      "ctaHref": z.string()
    }),
    "about": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "body": z.string(),
      "stats": z.array(z.object({
        "id": z.string(),
        "value": z.string(),
        "label": z.string()
      }))
    }),
    "hierarchy": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "description": z.string(),
      "tiers": z.array(z.object({
        "id": z.string(),
        "level": z.string(),
        "name": z.string(),
        "role": z.string(),
        "description": z.string(),
        "href": z.string(),
        "color": z.string()
      }))
    }),
    "events": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "description": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "date": z.string(),
        "title": z.string(),
        "type": z.string(),
        "description": z.string()
      }))
    }),
    "connect": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "body": z.string(),
      "links": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string(),
        "icon": z.string()
      }))
    })
  }),
  cognitive0creations: z.object({
    "hero": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "ctaLabel": z.string(),
      "ctaHref": z.string()
    }),
    "about": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "body": z.string(),
      "facebookHref": z.string(),
      "websiteHref": z.string()
    }),
    "products": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "type": z.string(),
        "description": z.string(),
        "href": z.string(),
        "status": z.string()
      }))
    }),
    "events": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "date": z.string(),
        "title": z.string(),
        "type": z.string(),
        "description": z.string()
      }))
    })
  }),
  mindbloom_showcase: z.object({
    "hero": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "ctaLabel": z.string(),
      "ctaHref": z.string(),
      "facebookHref": z.string(),
      "websiteHref": z.string()
    }),
    "features": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "description": z.string(),
        "icon": z.string()
      }))
    }),
    "events": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "date": z.string(),
        "title": z.string(),
        "type": z.string(),
        "description": z.string()
      }))
    }),
    "social": z.object({
      "facebookHref": z.string(),
      "websiteHref": z.string(),
      "playStoreHref": z.string()
    })
  }),
  events_calendar: z.object({
    "DAYS": z.array(z.string()),
    "meta": z.object({
      "eyebrow": z.string(),
      "headline": z.string(),
      "description": z.string()
    }),
    "events": z.array(z.object({
      "id": z.string(),
      "date": z.string(),
      "title": z.string(),
      "type": z.string(),
      "brand": z.string(),
      "brandKey": z.string(),
      "description": z.string()
    }))
  })
};
export type Schemas = typeof schemas;