# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazonUsingPom.spec.ts >> Amazon Automation >> Search and Add Product to Cart
- Location: tests/amazonUsingPom.spec.ts:15:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#sc-buy-box-ptc-button')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation "Shortcuts menu" [ref=e3]:
    - heading "Skip to" [level=2] [ref=e4]
    - list "Skip to" [ref=e5]:
      - listitem [ref=e6]:
        - link "main content" [ref=e7] [cursor=pointer]:
          - /url: "#skippedLink"
          - text: Main content
      - listitem [ref=e8]:
        - link "Shopping cart" [ref=e9] [cursor=pointer]:
          - /url: "#sc-active-cart"
          - text: Your Amazon Cart
    - separator [ref=e10]
    - heading "Keyboard shortcuts" [level=2] [ref=e11]
    - list "Keyboard shortcuts" [ref=e12]:
      - listitem [ref=e13]:
        - link "Search, alt, forward slash" [ref=e14] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e15]:
            - generic [ref=e16]: Search
            - generic [ref=e17]:
              - generic [ref=e18]: alt
              - generic [ref=e19]: +
              - generic [ref=e20]: /
      - listitem [ref=e21]:
        - link "Cart, shift, alt, c" [ref=e22] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e23]:
            - generic [ref=e24]: Cart
            - generic [ref=e25]:
              - generic [ref=e26]: shift
              - generic [ref=e27]: +
              - generic [ref=e28]: alt
              - generic [ref=e29]: +
              - generic [ref=e30]: C
      - listitem [ref=e31]:
        - link "Home, shift, alt, h" [ref=e32] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e33]:
            - generic [ref=e34]: Home
            - generic [ref=e35]:
              - generic [ref=e36]: shift
              - generic [ref=e37]: +
              - generic [ref=e38]: alt
              - generic [ref=e39]: +
              - generic [ref=e40]: H
      - listitem [ref=e41]:
        - link "Your orders, shift, alt, o" [ref=e42] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e43]:
            - generic [ref=e44]: Orders
            - generic [ref=e45]:
              - generic [ref=e46]: shift
              - generic [ref=e47]: +
              - generic [ref=e48]: alt
              - generic [ref=e49]: +
              - generic [ref=e50]: O
      - listitem [ref=e51]:
        - button "Show/hide shortcuts, shift, alt, z" [ref=e52] [cursor=pointer]:
          - generic [ref=e53]:
            - generic [ref=e54]: Show/Hide shortcuts
            - generic [ref=e55]:
              - generic [ref=e56]: shift
              - generic [ref=e57]: +
              - generic [ref=e58]: alt
              - generic [ref=e59]: +
              - generic [ref=e60]: Z
    - generic [ref=e66]: To move between items, use your keyboard's up or down arrows.
  - banner [ref=e67]:
    - navigation "Primary" [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - link "Amazon.in" [ref=e72] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Bengaluru 562130 Update location" [ref=e75] [cursor=pointer]:
            - generic [ref=e77]:
              - generic [ref=e78]: Delivering to Bengaluru 562130
              - generic [ref=e79]: Update location
        - search [ref=e82]:
          - generic [ref=e85]:
            - generic [ref=e87]: All
            - combobox "Select the department you want to search in" [ref=e89] [cursor=pointer]:
              - option "All Categories" [selected]
              - option "Alexa Skills"
              - option "Amazon Devices"
              - option "Amazon Fashion"
              - option "Amazon Fresh"
              - option "Amazon Pharmacy"
              - option "Appliances"
              - option "Apps & Games"
              - option "Audible Audiobooks"
              - option "Baby"
              - option "Beauty"
              - option "Books"
              - option "Car & Motorbike"
              - option "Clothing & Accessories"
              - option "Collectibles"
              - option "Computers & Accessories"
              - option "Deals"
              - option "Electronics"
              - option "Furniture"
              - option "Garden & Outdoors"
              - option "Gift Cards"
              - option "Grocery & Gourmet Foods"
              - option "Health & Personal Care"
              - option "Home & Kitchen"
              - option "Industrial & Scientific"
              - option "Jewellery"
              - option "Kindle Store"
              - option "Luggage & Bags"
              - option "Luxury Beauty"
              - option "Movies & TV Shows"
              - option "MP3 Music"
              - option "Music"
              - option "Musical Instruments"
              - option "Office Products"
              - option "Pet Supplies"
              - option "Prime Video"
              - option "Shoes & Handbags"
              - option "Software"
              - option "Sports, Fitness & Outdoors"
              - option "Subscribe & Save"
              - option "Tools & Home Improvement"
              - option "Toys & Games"
              - option "Under ₹500"
              - option "Video Games"
              - option "Watches"
          - searchbox "Search Amazon.in" [ref=e92]
          - generic "Go" [ref=e95] [cursor=pointer]:
            - button "Go" [ref=e96]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=e100] [cursor=pointer]:
              - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
              - generic [ref=e103]:
                - img "India" [ref=e104]
                - generic [ref=e105]: EN
            - button "Expand to Change Language or Country" [ref=e106] [cursor=pointer]
          - generic [ref=e107]:
            - link "Hello, sign in Account & Lists" [ref=e108] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fcart%2Fview.html%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
              - generic [ref=e110]: Hello, sign in
              - generic [ref=e111]: Account & Lists
            - button "Expand Account and Lists" [ref=e112] [cursor=pointer]
          - link "Returns & Orders" [ref=e113] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=e114]: Returns
            - generic [ref=e115]: "& Orders"
          - link "0 items in cart" [ref=e116] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [ref=e118]: "0"
            - generic [ref=e121]: Cart
      - generic [ref=e122]:
        - button "Open All Categories Menu" [ref=e124] [cursor=pointer]:
          - generic [ref=e126]: All
        - list [ref=e130]:
          - listitem [ref=e131]:
            - generic [ref=e132]:
              - link "Fresh" [ref=e133] [cursor=pointer]:
                - /url: /fresh?ref_=nav_cs_grocery
              - button "Fresh Details" [ref=e134] [cursor=pointer]
          - listitem [ref=e135]:
            - link "MX Player" [ref=e137] [cursor=pointer]:
              - /url: /minitv?ref_=nav_avod_desktop_topnav
          - listitem [ref=e138]:
            - link "Sell" [ref=e140] [cursor=pointer]:
              - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
          - listitem [ref=e141]:
            - link "Bestsellers" [ref=e143] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=e144]:
            - link "Today's Deals" [ref=e146] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=e147]:
            - link "Mobiles" [ref=e149] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=e150]:
            - link "New Releases" [ref=e152] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=e153]:
            - generic [ref=e154]:
              - link "Prime" [ref=e155] [cursor=pointer]:
                - /url: /prime?ref_=nav_cs_primelink_nonmember
              - button "Prime Details" [ref=e156] [cursor=pointer]
          - listitem [ref=e157]:
            - link "Amazon Pay" [ref=e159] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=e160]:
            - link "Electronics" [ref=e162] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=e163]:
            - link "Customer Service" [ref=e165] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=e166]:
            - link "Home & Kitchen" [ref=e168] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=e169]:
            - link "Fashion" [ref=e171] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=e172]:
            - link "Computers" [ref=e174] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=e175]:
            - link "Toys & Games" [ref=e177] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=e178]:
            - link "Car & Motorbike" [ref=e180] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=e181]:
            - link "Pet Supplies" [ref=e183] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=e184]:
            - link "Home Improvement" [ref=e186] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=e187]:
            - link "Gift Cards" [ref=e189] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=e190]:
            - link "Sports, Fitness & Outdoors" [ref=e192] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=e193]:
            - link "Beauty & Personal Care" [ref=e195] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=e196]:
            - link "Video Games" [ref=e198] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=e199]:
            - link "Baby" [ref=e201] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=e202]:
            - link "Custom Products" [ref=e204] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=e205]:
            - link "Grocery & Gourmet Foods" [ref=e207] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=e208]:
            - link "Health, Household & Personal Care" [ref=e210] [cursor=pointer]:
              - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
          - listitem [ref=e211]:
            - link "AmazonBasics" [ref=e213] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=e214]:
            - link "Audible" [ref=e216] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=e217]:
            - link "Subscribe & Save" [ref=e219] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
          - listitem [ref=e220]:
            - link "Kindle eBooks" [ref=e222] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=e223]:
            - link "Books" [ref=e225] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=e226]:
            - link "Flights" [ref=e228] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
  - main [ref=e233]:
    - heading "All Carts" [level=1] [ref=e234]
    - generic [ref=e238]:
      - generic [ref=e241]:
        - img [ref=e243]
        - generic [ref=e244]:
          - heading "Your Amazon Cart is empty" [level=3] [ref=e245]
          - link "Shop today’s deals" [ref=e247] [cursor=pointer]:
            - /url: /gp/goldbox/ref=cart_empty_deals
          - generic [ref=e248]:
            - link "Sign in to your account" [ref=e251] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin/ref=cart_empty_sign_in?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fcart%3Fapp-nav-type%3Dnone%26dc%3Ddf&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
            - link "Sign up now" [ref=e254] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/register?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fcart%3Fapp-nav-type%3Dnone%26dc%3Ddf&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
      - generic [ref=e258]:
        - paragraph [ref=e260]: The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
        - paragraph [ref=e261]: Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
  - complementary "Your recently viewed items and featured recommendations" [ref=e262]:
    - generic [ref=e270]:
      - heading "See personalized recommendations" [level=2] [ref=e271]
      - link "Sign in" [ref=e274] [cursor=pointer]:
        - /url: https://www.amazon.in/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex&openid.pape.max_auth_age=0
      - generic [ref=e275]:
        - text: New customer?
        - link "Start here." [ref=e276] [cursor=pointer]:
          - /url: https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex
  - generic [ref=e277]:
    - button "Back to top" [ref=e278] [cursor=pointer]:
      - generic [ref=e279]: Back to top
    - generic [ref=e280]:
      - generic [ref=e281]:
        - heading "Get to Know Us" [level=6] [ref=e282]
        - list [ref=e283]:
          - listitem [ref=e284]:
            - link "About Amazon" [ref=e285] [cursor=pointer]:
              - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e286]:
            - link "Careers" [ref=e287] [cursor=pointer]:
              - /url: https://amazon.jobs
          - listitem [ref=e288]:
            - link "Press Releases" [ref=e289] [cursor=pointer]:
              - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e290]:
            - link "Amazon Science" [ref=e291] [cursor=pointer]:
              - /url: https://www.amazon.science
      - generic [ref=e293]:
        - heading "Connect with Us" [level=6] [ref=e294]
        - list [ref=e295]:
          - listitem [ref=e296]:
            - link "Facebook" [ref=e297] [cursor=pointer]:
              - /url: https://www.facebook.com/AmazonIN
          - listitem [ref=e298]:
            - link "Twitter" [ref=e299] [cursor=pointer]:
              - /url: https://x.com/AmazonIN
          - listitem [ref=e300]:
            - link "Instagram" [ref=e301] [cursor=pointer]:
              - /url: https://www.instagram.com/amazondotin
      - generic [ref=e303]:
        - heading "Make Money with Us" [level=6] [ref=e304]
        - list [ref=e305]:
          - listitem [ref=e306]:
            - link "Sell on Amazon" [ref=e307] [cursor=pointer]:
              - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
          - listitem [ref=e308]:
            - link "Sell under Amazon Accelerator" [ref=e309] [cursor=pointer]:
              - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
          - listitem [ref=e310]:
            - link "Protect and Build Your Brand" [ref=e311] [cursor=pointer]:
              - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
          - listitem [ref=e312]:
            - link "Amazon Global Selling" [ref=e313] [cursor=pointer]:
              - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
          - listitem [ref=e314]:
            - link "Supply to Amazon" [ref=e315] [cursor=pointer]:
              - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
          - listitem [ref=e316]:
            - link "Become an Affiliate" [ref=e317] [cursor=pointer]:
              - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
          - listitem [ref=e318]:
            - link "Fulfilment by Amazon" [ref=e319] [cursor=pointer]:
              - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
          - listitem [ref=e320]:
            - link "Advertise Your Products" [ref=e321] [cursor=pointer]:
              - /url: https://advertising.amazon.in/?ref=Amz.in
          - listitem [ref=e322]:
            - link "Amazon Pay on Merchants" [ref=e323] [cursor=pointer]:
              - /url: https://www.amazonpay.in/merchant
      - generic [ref=e325]:
        - heading "Let Us Help You" [level=6] [ref=e326]
        - list [ref=e327]:
          - listitem [ref=e328]:
            - link "Your Account" [ref=e329] [cursor=pointer]:
              - /url: /gp/css/homepage.html?ref_=footer_ya
          - listitem [ref=e330]:
            - link "Returns Centre" [ref=e331] [cursor=pointer]:
              - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
          - listitem [ref=e332]:
            - link "Recalls and Product Safety Alerts" [ref=e333] [cursor=pointer]:
              - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
          - listitem [ref=e334]:
            - link "100% Purchase Protection" [ref=e335] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
          - listitem [ref=e336]:
            - link "Amazon App Download" [ref=e337] [cursor=pointer]:
              - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
          - listitem [ref=e338]:
            - link "Help" [ref=e339] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
    - generic [ref=e341]:
      - link "Amazon India Home" [ref=e344] [cursor=pointer]:
        - /url: /ref=footer_logo
      - generic [ref=e347]:
        - generic [ref=e348]:
          - link "Choose a language for shopping. Current selection is English." [ref=e349] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
            - generic [ref=e351]: English
          - button "Expand to Change Language or Country" [ref=e352] [cursor=pointer]
        - button "Choose a country/region for shopping. The current selection is India." [ref=e353] [cursor=pointer]:
          - generic [ref=e355]: India
    - generic "More on Amazon" [ref=e356]:
      - generic "More on Amazon" [ref=e357]:
        - list [ref=e358]:
          - listitem [ref=e359]:
            - link "AbeBooks Books, art & collectibles" [ref=e360] [cursor=pointer]:
              - /url: https://www.abebooks.com/
              - heading "AbeBooks" [level=5] [ref=e361]
              - generic [ref=e362]:
                - text: Books, art
                - text: "& collectibles"
          - listitem [ref=e363]
          - listitem [ref=e364]:
            - link "Amazon Web Services Scalable Cloud Computing Services" [ref=e365] [cursor=pointer]:
              - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
              - heading "Amazon Web Services" [level=5] [ref=e366]
              - generic [ref=e367]:
                - text: Scalable Cloud
                - text: Computing Services
          - listitem [ref=e368]
          - listitem [ref=e369]:
            - link "Audible Download Audio Books" [ref=e370] [cursor=pointer]:
              - /url: https://www.audible.in/
              - heading "Audible" [level=5] [ref=e371]
              - generic [ref=e372]:
                - text: Download
                - text: Audio Books
          - listitem [ref=e373]
          - listitem [ref=e374]:
            - link "IMDb Movies, TV & Celebrities" [ref=e375] [cursor=pointer]:
              - /url: https://www.imdb.com/
              - heading "IMDb" [level=5] [ref=e376]
              - generic [ref=e377]:
                - text: Movies, TV
                - text: "& Celebrities"
        - list [ref=e378]:
          - listitem [ref=e379]:
            - link "Shopbop Designer Fashion Brands" [ref=e380] [cursor=pointer]:
              - /url: https://www.shopbop.com/
              - heading "Shopbop" [level=5] [ref=e381]
              - generic [ref=e382]:
                - text: Designer
                - text: Fashion Brands
          - listitem [ref=e383]
          - listitem [ref=e384]:
            - link "Amazon Business Everything For Your Business" [ref=e385] [cursor=pointer]:
              - /url: /business?ref=footer_aingw
              - heading "Amazon Business" [level=5] [ref=e386]
              - generic [ref=e387]:
                - text: Everything For
                - text: Your Business
          - listitem [ref=e388]
          - listitem [ref=e389]:
            - link "Amazon Music Stream millions of songs" [ref=e390] [cursor=pointer]:
              - /url: /music/player?ref=footer_apm
              - heading "Amazon Music" [level=5] [ref=e391]
              - generic [ref=e392]: Stream millions of songs
          - listitem [ref=e393]
          - listitem [ref=e394]
    - generic [ref=e395]:
      - list [ref=e396]:
        - listitem [ref=e397]:
          - link "Conditions of Use & Sale" [ref=e398] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
        - listitem [ref=e399]:
          - link "Privacy Notice" [ref=e400] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
        - listitem [ref=e401]:
          - link "Interest-Based Ads" [ref=e402] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
      - generic [ref=e403]: © 1996-2026, Amazon.com, Inc. or its affiliates
  - iframe [ref=e405]:
    - iframe [ref=f2e2]:
      - generic [active] [ref=f3e1]:
        - img [ref=f3e2]
        - img [ref=f3e3]
        - img [ref=f3e4]
        - img [ref=f3e5]
        - img [ref=f3e6]
        - img [ref=f3e7]
        - img [ref=f3e8]
        - img [ref=f3e9]
        - img [ref=f3e10]
        - img [ref=f3e11]
        - img [ref=f3e12]
        - img [ref=f3e13]
        - img [ref=f3e14]
        - img [ref=f3e15]
        - img [ref=f3e16]
        - img [ref=f3e17]
        - img [ref=f3e18]
        - img [ref=f3e19]
        - img [ref=f3e20]
        - img [ref=f3e21]
        - img [ref=f3e22]
        - img [ref=f3e23]
        - img [ref=f3e24]
        - img [ref=f3e25]
        - img [ref=f3e26]
        - img [ref=f3e27]
        - img [ref=f3e28]
        - img [ref=f3e29]
        - img [ref=f3e30]
        - img [ref=f3e31]
        - img [ref=f3e32]
        - img [ref=f3e33]
        - img [ref=f3e34]
        - img [ref=f3e35]
        - img [ref=f3e36]
        - img [ref=f3e37]
        - img [ref=f3e38]
        - img [ref=f3e39]
        - img [ref=f3e40]
```

# Test source

```ts
  1  | import { Page,Locator,expect } from "@playwright/test";
  2  | 
  3  | export class amazonCart{
  4  |     readonly page:Page;
  5  |     readonly cart:Locator;
  6  |     readonly boxButton:Locator;
  7  |     readonly buy:Locator;
  8  | 
  9  |     constructor(page:Page){
  10 |         this.page=page;
  11 |         this.cart=page.locator('//button[text()="Add to cart" and @id="a-autoid-1-announce"]')
  12 |         this.boxButton=page.locator("//span[@class='nav-cart-icon nav-sprite']")
  13 |         this.buy=page.locator("#sc-buy-box-ptc-button")
  14 |     }
  15 |     async cartClick(){
  16 |         await this.cart.click();
  17 |     }
  18 |     async boxClick(){
  19 |         await this.boxButton.click()
  20 |     }
  21 |    async buyClick(){
> 22 |     await this.buy.click()
     |                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  23 |    }
  24 | 
  25 | }
  26 | 
  27 | 
```