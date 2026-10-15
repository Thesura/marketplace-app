import * as cheerio from 'cheerio';

export default function extract(data: any): any {

    const $ = cheerio.load(data);

    let listings: any = [];

    let listingElements = $('div.marketplace-item');

    listings = listingElements.map((i, el) => {
        return {
            'url': $(el).find('a.marketplace-link').attr('href'),
            'title': $(el).find('span.title').text(),
            'initial_price': $(el).find('span.initial-price').text(),
            'final_price': $(el).find('span.final-price').text(),
            'currency': $(el).find('span.currency').text(),
            'product_id': $(el).attr('data-id'),
            // 'breadcrumbs': [{'breadcrumbs_name': category.text, 'breadcrumbs_url': category['href']} for category in listing.find_all('a', class_='breadcrumb')],
            'condition': $(el).find('span.condition').text(),
            'description': $(el).find('span.description').text(),
            'location': $(el).find('span.location').text(),
            // 'country_code': 'us',  # Placeholder for country code
            // 'root_category': 'General',  # Placeholder for category
            'images': $(el).find('img.product-image').map((i, img) => $(img).attr('src')),
            'seller_description': $(el).find('span.seller-description').length ? $(el).find('span.seller-description').text() : '',
            'color': $(el).find('span.color').length ? $(el).find('span.color').text() : null,
            'brand': $(el).find('span.brand').length ? $(el).find('span.brand').text() : null,
            'videos': $(el).find('video').map((i, video) => $(video).attr('src'))
        }
    })
    // Extract Facebook-specific data here
    return listings;
}