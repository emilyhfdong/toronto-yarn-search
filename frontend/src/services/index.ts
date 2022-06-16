import axios from "axios"

export type YarnResult = {
  name: string
  href: string
  price?: string
  img: string
  store: string
}

// const mockSearchYarns: (
//   searchTerm: string
// ) => Promise<{ result: YarnResult[] }> = () =>
//   new Promise((resolve) => {
//     setTimeout(
//       () =>
//         resolve({
//           result: [
//             {
//               name: "Knitting for Olive Merino",
//               href: "https://eweknit.co/products/knittingforolivemerino?_pos=1&_sid=a16bd8a4d&_ss=r&variant=39289074810977",
//               price: "$13.50 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/autumn_f6ddf1f1-fd0e-430c-96a5-aeded9e6cee3_1024x1024_1_large.jpg?v=1616880761",
//               store: "eweknit",
//             },
//             {
//               name: "Knitting for Olive - Heavy Merino",
//               href: "https://eweknit.co/products/knittingforolive-heavymerino?_pos=2&_sid=a16bd8a4d&_ss=r&variant=30257122869345",
//               price: "$12.95 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/off_white_large.jpg?v=1569447254",
//               store: "eweknit",
//             },
//             {
//               name: "Knitting for Olive Olive Top Kit",
//               href: "https://eweknit.co/products/knitting-for-olive-olive-top-kit?_pos=3&_sid=a16bd8a4d&_ss=r&variant=39775364808801",
//               price: "$42.50 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/olivetop_large.jpg?v=1644444720",
//               store: "eweknit",
//             },
//             {
//               name: "Knitting for Olive Double Soft Merino",
//               href: "https://eweknit.co/products/knittingforolivedoublesoftmerino?_pos=4&_sid=a16bd8a4d&_ss=r&variant=32494262681697",
//               price: "$14.95 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/rose_72eb83a7-2048-454a-bbbc-6e0a11c0e57f_large.png?v=1593472290",
//               store: "eweknit",
//             },
//             {
//               name: "Knitting for Olive Soft Silk Mohair",
//               href: "https://eweknit.co/products/knittingforolivesoftsilkmohair?_pos=5&_sid=a16bd8a4d&_ss=r&variant=30977936654433",
//               price: "$14.50 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/off_white_be4983c4-773a-475a-94bd-27fef7324ce2_large.jpg?v=1571870671",
//               store: "eweknit",
//             },
//             {
//               name: "Knitting for Olive - Cotton Merino",
//               href: "https://eweknit.co/products/knittingforolive-cottonmerino?_pos=6&_sid=a16bd8a4d&_ss=r&variant=32046379270241",
//               price: "$12.50 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/NaturalWhite_large.jpg?v=1586971015",
//               store: "eweknit",
//             },
//             {
//               name: "Melody Sweater - Knitting For Olive",
//               href: "https://eweknit.co/products/melody-sweater-knitting-for-olive?_pos=7&_sid=a16bd8a4d&_ss=r&variant=39713827258465",
//               price: "$112.00 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/melody_01f83e13-0c5a-41f1-b993-732473249630_large.jpg?v=1644440865",
//               store: "eweknit",
//             },
//             {
//               name: "Lola Pullover - Knitting for Olive",
//               href: "https://eweknit.co/products/lolapullover-knittingforolive?_pos=8&_sid=a16bd8a4d&_ss=r&variant=39387505393761",
//               price: "$121.50 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/5102_large.jpg?v=1622749113",
//               store: "eweknit",
//             },
//             {
//               name: "Amelia Pullover - Knitting For Olive",
//               href: "https://eweknit.co/products/amelia-pullover-knitting-for-olive?_pos=9&_sid=a16bd8a4d&_ss=r&variant=39863853744225",
//               price: "$104.00 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/amelia4_29d4edac-a053-46b3-b791-63676af6bb1c_large.jpg?v=1646417298",
//               store: "eweknit",
//             },
//             {
//               name: "Knitting for Olive - Waffle Sweater Kits",
//               href: "https://eweknit.co/products/knitting-for-olive-waffle-sweater-kits?_pos=10&_sid=a16bd8a4d&_ss=r&variant=39674657276001",
//               price: "$145.00 CAD",
//               img: "https://cdn.shopify.com/s/files/1/0229/5835/products/k4owaffle2_large.jpg?v=1644444327",
//               store: "eweknit",
//             },
//             {
//               name: "Knitting for Olive: Merino",
//               href: "https://theknittingloft.ca/products/merino-1?_pos=1&_sid=60a49f0cf&_ss=r&variant=37615123431580",
//               price: "$13.50",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/Screen_Shot_2018-11-26_at_2.04.54_PM_1024x.png?v=1577910700",
//               store: "knitting loft",
//             },
//             {
//               name: "Knitting For Olive - Pure Silk",
//               href: "https://theknittingloft.ca/products/knitting-for-olive-pure-silk?_pos=2&_sid=60a49f0cf&_ss=r&variant=34641349247132",
//               price: "$15.50",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/dove_blue_1024x.jpg?v=1620754803",
//               store: "knitting loft",
//             },
//             {
//               name: "Knitting for Olive - Soft Silk Mohair",
//               href: "https://theknittingloft.ca/products/knitting-for-olive-soft-silk-mohair?_pos=3&_sid=60a49f0cf&_ss=r&variant=37697614119068",
//               price: "$14.50",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/kfosmmidnight_1024x.jpg?v=1603291501",
//               store: "knitting loft",
//             },
//             {
//               name: "Knitting for Olive: Cotton Merino",
//               href: "https://theknittingloft.ca/products/cottonmerino?_pos=4&_sid=60a49f0cf&_ss=r&variant=9347238428732",
//               price: "$12.50",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/Screen_Shot_2018-11-26_at_1.31.01_PM_1024x.png?v=1612472778",
//               store: "knitting loft",
//             },
//             {
//               name: "Laine - My Knitting Notes",
//               href: "https://theknittingloft.ca/products/laine-1?_pos=5&_sid=60a49f0cf&_ss=r",
//               price: "$36.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/ShopifyProductSize-2021-12-22T132640.910_1024x.png?v=1640197612",
//               store: "knitting loft",
//             },
//             {
//               name: "Flecks by The Knitting Loft - Tweed DK Yarn",
//               href: "https://theknittingloft.ca/products/flecks-by-the-knitting-loft-tweed-dk-yarn?_pos=6&_sid=60a49f0cf&_ss=r&variant=42090725638391",
//               price: "$36.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/6_44ff50fb-440b-4951-b648-488584c8974f_1024x.png?v=1644945463",
//               store: "knitting loft",
//             },
//             {
//               name: "Mesa by The Knitting Loft - Peruvian Highland Wool Sport",
//               href: "https://theknittingloft.ca/products/mesa-by-the-knitting-loft-peruvian-highland-wool-sport?_pos=7&_sid=60a49f0cf&_ss=r&variant=42362503430391",
//               price: "$28.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/1_4d1af2a2-23e4-4d6e-ac06-0ffc2977554d_1024x.png?v=1644944947",
//               store: "knitting loft",
//             },
//             {
//               name: "Darlings by The Knitting Loft - Merino Fingering Minis (Part 1)",
//               href: "https://theknittingloft.ca/products/darlings-by-the-knitting-loft-merino-fingering-minis?_pos=8&_sid=60a49f0cf&_ss=r&variant=40541806690460",
//               price: "$8.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/5_e17a4998-3a34-421b-8812-b188147b52c7_1024x.png?v=1644945308",
//               store: "knitting loft",
//             },
//             {
//               name: "Boots by The Knitting Loft - Merino Fingering Yarn (Part 1)",
//               href: "https://theknittingloft.ca/products/boots-by-the-knitting-loft-merino-fingering-yarn?_pos=9&_sid=60a49f0cf&_ss=r&variant=40106889248924",
//               price: "$29.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/2_854a4f8e-95be-4a87-97a0-dd34885cd192_1024x.png?v=1644945066",
//               store: "knitting loft",
//             },
//             {
//               name: "La-Di-Da by The Knitting Loft - MCN Fingering Yarn",
//               href: "https://theknittingloft.ca/products/la-di-da-by-the-knitting-loft-mcn-fingering-yarn?_pos=10&_sid=60a49f0cf&_ss=r&variant=41092387405980",
//               price: "$36.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/4_6f39cfe7-cfc8-4ee6-be13-be497f870009_1024x.png?v=1644945381",
//               store: "knitting loft",
//             },
//             {
//               name: "Dust by The Knitting Loft - Mohair/Silk Lace Yarn (Part 1)",
//               href: "https://theknittingloft.ca/products/dust-by-the-knitting-loft-mohair-silk-lace-yarn?_pos=11&_sid=60a49f0cf&_ss=r&variant=40107023073436",
//               price: "$36.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/3_d755d519-e3b7-4527-b00f-119e33f56a93_1024x.png?v=1644945190",
//               store: "knitting loft",
//             },
//             {
//               name: "Christel Seyfarth Knit Kits",
//               href: "https://theknittingloft.ca/products/christel-seyfarth-knit-kits?_pos=12&_sid=60a49f0cf&_ss=r&variant=36580262641820",
//               price: "$97.25",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/megabeachrose_1024x.png?v=1608486296",
//               store: "knitting loft",
//             },
//             {
//               name: "Eat &amp; Knit Book",
//               href: "https://theknittingloft.ca/products/knit-eat-book?_pos=13&_sid=60a49f0cf&_ss=r",
//               price: "$48.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/2_f7e62476-e997-4707-b5e2-11e3fef944fb_1024x.png?v=1603821490",
//               store: "knitting loft",
//             },
//             {
//               name: "Sunflower Knit - Knitter's Joint Salve",
//               href: "https://theknittingloft.ca/products/sunflower-knit-knitters-joint-salve?_pos=14&_sid=60a49f0cf&_ss=r",
//               price: "$15.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/Shopify_Product_Size_19_0660792e-2b16-46f1-829f-4d6140e7c1ad_1024x.png?v=1582828020",
//               store: "knitting loft",
//             },
//             {
//               name: "Farmers Daughter Fibers - Juicy DK",
//               href: "https://theknittingloft.ca/products/juicy-dk-11?_pos=15&_sid=60a49f0cf&_ss=r&variant=39588635574428",
//               price: "$31.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/Juicy_DK1_1024x.jpg?v=1617827207",
//               store: "knitting loft",
//             },
//             {
//               name: "All Purpose Carrying Case by Twig &amp; Horn",
//               href: "https://theknittingloft.ca/products/twig-horn-all-purpose-carrying-case?_pos=16&_sid=60a49f0cf&_ss=r&variant=30371347202180",
//               price: "$84.50",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/all_purpose_camel_1024x.jpg?v=1570562769",
//               store: "knitting loft",
//             },
//             {
//               name: "Mominoki Yarn Finnwool",
//               href: "https://theknittingloft.ca/products/mominoki-yarn-finnwool?_pos=17&_sid=60a49f0cf&_ss=r&variant=36264065597596",
//               price: "$40.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/ShopifyProductSize_47_2f98c211-0a0f-4762-8518-55b9c710b839_1024x.png?v=1622655423",
//               store: "knitting loft",
//             },
//             {
//               name: "Mominoki Yarns German Merino Light",
//               href: "https://theknittingloft.ca/products/mominoki-yarns-german-merino-light?_pos=18&_sid=60a49f0cf&_ss=r&variant=42135641325815",
//               price: "$40.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/ShopifyProductSize-2021-12-03T093022.089_1024x.png?v=1638541890",
//               store: "knitting loft",
//             },
//             {
//               name: "Cocoknits Kraft Caddy",
//               href: "https://theknittingloft.ca/products/cocoknits-kraft-caddy?_pos=19&_sid=60a49f0cf&_ss=r",
//               price: "$40.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/ShopifyProductSize-2021-03-11T143238.297_1024x.png?v=1615491169",
//               store: "knitting loft",
//             },
//             {
//               name: "Twig &amp; Horn - Canvas Tool Pouch",
//               href: "https://theknittingloft.ca/products/twig-horn-canvas-tool-pouch?_pos=20&_sid=60a49f0cf&_ss=r",
//               price: "$44.00",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/pouches_1024x.jpg?v=1603476648",
//               store: "knitting loft",
//             },
//             {
//               name: "Wool &amp; Wire - Stitch Markers",
//               href: "https://theknittingloft.ca/products/wool-and-wire-stitch-marker-w-3-pieces?_pos=21&_sid=60a49f0cf&_ss=r&variant=39890901893276",
//               price: "$32.95",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/ShopifyProductSize-2021-05-12T144504.182_1024x.png?v=1627131430",
//               store: "knitting loft",
//             },
//             {
//               name: "Rowan - Pure Wool Superwash Worsted",
//               href: "https://theknittingloft.ca/products/rowan-pure-wool-superwash-worsted?_pos=22&_sid=60a49f0cf&_ss=r&variant=37734268207260",
//               price: "$15.50",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/ShopifyProductSize_7_2aa147b3-1345-4b16-bc78-824e016e04d4_1024x.png?v=1604712245",
//               store: "knitting loft",
//             },
//             {
//               name: "ITO Nui Silk Stitching Thread",
//               href: "https://theknittingloft.ca/products/ito-nui-silk-stitching-thread?_pos=23&_sid=60a49f0cf&_ss=r&variant=42123957731575",
//               price: "$9.95",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/ShopifyProductSize-2021-12-03T121559.234_1024x.png?v=1638551769",
//               store: "knitting loft",
//             },
//             {
//               name: "ITO Iki Silk Embroidery Thread",
//               href: "https://theknittingloft.ca/products/ito-iki-silk-embroidery-thread?_pos=24&_sid=60a49f0cf&_ss=r&variant=42123885510903",
//               price: "$9.95",
//               img: "https://cdn.shopify.com/s/files/1/0011/5002/5788/products/ShopifyProductSize-2021-12-03T112817.433_1024x.png?v=1638549020",
//               store: "knitting loft",
//             },
//             {
//               name: "Armenian Knitting",
//               href: "https://www.romniwools.ca/products/armenian-knitting?_pos=1&_sid=b19c95ad4&_ss=r",
//               price: "$28.95",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/image_e93e6efb-86cc-4156-91aa-d582155b4dda_95x95@2x.jpg?v=1594837610",
//               store: "romni",
//             },
//             {
//               name: "KFI Collection Teenie Weenie Wool",
//               href: "https://www.romniwools.ca/products/teeny-weeny-wool?_pos=2&_sid=b19c95ad4&_ss=r&variant=39279045476409",
//               price: "$2.45",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/kfi-collection-teenie-weenie-wool-colour-chart-shade-card_95x95@2x.jpg?v=1619202356",
//               store: "romni",
//             },
//             {
//               name: "Gathering Yarns- Summertime sock",
//               href: "https://www.romniwools.ca/products/gathering-yarns-summertime-sock?_pos=3&_sid=b19c95ad4&_ss=r&variant=36988583575609",
//               price: "$13.80",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/image_852bbdeb-b1cf-43e4-866d-098f84abc7fc_95x95@2x.png?v=1613857890",
//               store: "romni",
//             },
//             {
//               name: "BC Garn Lino",
//               href: "https://www.romniwools.ca/products/bc-garn-lino?_pos=4&_sid=b19c95ad4&_ss=r&variant=39825250189369",
//               price: "$10.99",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/bc-garn-lino-linen-yarn-dk-double-knit-vegan-summer-yarn-livestyle_95x95@2x.jpg?v=1644621635",
//               store: "romni",
//             },
//             {
//               name: "SALE Lang Olivia",
//               href: "https://www.romniwools.ca/products/sale-lang-olivia?_pos=5&_sid=b19c95ad4&_ss=r&variant=39926724919353",
//               price: "$13.80",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/image_a0d42dfc-f953-4033-915a-9b04d0a751d4_95x95@2x.jpg?v=1646858664",
//               store: "romni",
//             },
//             {
//               name: "Borgo de Pazzi Flambe",
//               href: "https://www.romniwools.ca/products/borgo-de-pazzi-flambe?_pos=6&_sid=b19c95ad4&_ss=r&variant=39263041060921",
//               price: "$5.99",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/Ball_and_Leaflets_Scroll_Over_300x475_9d5d238c-9385-402f-86e5-950d79eb7311_95x95@2x.jpg?v=1616779218",
//               store: "romni",
//             },
//             {
//               name: "Estelle Eco Cotton DK",
//               href: "https://www.romniwools.ca/products/estelle-eco-cotton-dk?_pos=7&_sid=b19c95ad4&_ss=r&variant=39853832798265",
//               price: "$5.99",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/Eco-Cotton-DK_95x95@2x.jpg?v=1645229463",
//               store: "romni",
//             },
//             {
//               name: "Borgo de'Pazzi Amore Lino",
//               href: "https://www.romniwools.ca/products/borgo-depazzi-amore-lino?_pos=8&_sid=b19c95ad4&_ss=r&variant=40277272428601",
//               price: "$6.99",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/borgo-de-pazzi-amore-lino-yarn-cotton-linen-recycled-yarn-options_95x95@2x.jpg?v=1653677271",
//               store: "romni",
//             },
//             {
//               name: "Borgo de'Pazzi Giza",
//               href: "https://www.romniwools.ca/products/borgo-depazzi-giza?_pos=9&_sid=b19c95ad4&_ss=r&variant=36988064268345",
//               price: "$5.99",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/C6157CB5-A686-4A60-AE8D-84BEEE7C65BF_95x95@2x.jpg?v=1624652679",
//               store: "romni",
//             },
//             {
//               name: "Borgo de'Pazzi Giza - Alternate dye lots",
//               href: "https://www.romniwools.ca/products/borgo-depazzi-giza-alternate-dye-lots?_pos=10&_sid=b19c95ad4&_ss=r&variant=39310125334585",
//               price: "$5.99",
//               img: "https://cdn.shopify.com/s/files/1/0271/7846/7385/products/C6157CB5-A686-4A60-AE8D-84BEEE7C65BF_02df6518-1c0f-4079-8c91-ec4c6e562e03_95x95@2x.jpg?v=1624652880",
//               store: "romni",
//             },
//             {
//               name: "Addi Click Interchangeable Circular Knitting Needle SETS",
//               href: "https://knitomatic.com/products/addi-click-interchangeable-needle-set?_pos=1&_sid=3a66cc7ac&_ss=r&variant=775841181",
//               img: "https://cdn.shopify.com/s/files/1/0420/0017/products/Addi_Click_Turbo_Set_Outside_DISPLAY_large.jpg?v=1623531079",
//               store: "knitomatic",
//             },
//             {
//               name: "Rico Creative So Cool So Soft",
//               href: "https://knitomatic.com/products/rico-creative-so-cool-so-soft-4?_pos=3&_sid=3a66cc7ac&_ss=r&variant=41108833894586",
//               img: "https://cdn.shopify.com/s/files/1/0420/0017/products/RicoSoCoolSoSoftDISPLAY_large.jpg?v=1645132775",
//               store: "knitomatic",
//             },
//             {
//               name: "Drops Wish",
//               href: "https://knitomatic.com/products/drops-wish?_pos=4&_sid=3a66cc7ac&_ss=r&variant=39854357086394",
//               img: "https://cdn.shopify.com/s/files/1/0420/0017/products/DropsWishDISPLAY1_large.jpg?v=1624645913",
//               store: "knitomatic",
//             },
//             {
//               name: "Moorit Mag",
//               href: "https://knitomatic.com/products/moorit-mag?_pos=5&_sid=3a66cc7ac&_ss=r",
//               img: "https://cdn.shopify.com/s/files/1/0420/0017/products/Moorit-2-CoverSQed_large.jpg?v=1652547760",
//               store: "knitomatic",
//             },
//           ],
//         }),
//       8000
//     )
//   })

const searchYarns = async (searchTerm: string): Promise<YarnResult[]> => {
  const response = await axios.post<{ result: YarnResult[] }>(
    "https://1d2wmw2i3d.execute-api.us-east-1.amazonaws.com/search",
    { searchTerm }
  )

  return response.data.result
}

export const Backend = {
  searchYarns,
}
