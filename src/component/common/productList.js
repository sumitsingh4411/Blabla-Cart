const productList = [
    {
        id: 1,
        category: 'Electronics',
        name: 'Laptop',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/v/r/y/hp-original-imaftyzqzbyerzgt.jpeg?q=70'
    },
    {
        id: 2,
        category: 'Electronics',
        name: 'Headphone',
        imgsrc: 'https://rukminim1.flixcart.com/image/612/612/k4hcjgw0pkrrdj/headphone-refurbished/z/n/7/u-wh-ch510-sony-original-imafk72hs5qwy5ub.jpeg?q=70'
    },
    {
        id: 3,
        category: 'Electronics',
        name: 'EarPhone',
        imgsrc: 'https://rukminim1.flixcart.com/image/612/612/kg8avm80-0/headphone/2/p/r/e304a-oneplus-original-imafwgkvchwhf63s.jpeg?q=70'
    },
    {
        id: 4,
        category: 'Electronics',
        name: 'Laptop',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/v/r/y/hp-original-imaftyzqzbyerzgt.jpeg?q=70'
    },
    {
        id: 5,
        category: 'Electronics',
        name: 'Earphodes',
        imgsrc: 'https://rukminim1.flixcart.com/image/612/612/ksdjma80/headphone/o/f/c/airdopes-131-airdopes-138-boat-original-imag5yz96jehyqrg.jpeg?q=70'
    },
    {
        id: 6,
        category: 'Electronics',
        name: 'JBL',
        imgsrc: 'https://rukminim1.flixcart.com/image/612/612/juwzf680/headphone-refurbished/7/h/k/z-c100si-jbl-original-imaffxja5vmgwudz.jpeg?q=70'
    },
    {
        id: 7,
        category: 'Boat',
        name: 'Speaker',
        imgsrc: 'https://rukminim1.flixcart.com/image/612/612/kbzergw0/speaker/mobile-tablet-speaker/n/y/d/stone-190-stone-190f-boat-original-imaft7gyph2ghgk2.jpeg?q=70'
    },
    {
        id: 8,
        category: 'Electronics',
        name: 'Media',
        imgsrc: 'https://rukminim1.flixcart.com/image/612/612/kmax8y80/selector-box/3/m/5/box-4k-mdz-22-ab-mi-original-imagf8ctdrsswheb.jpeg?q=70'
    },
    {
        id: 9,
        category: 'Electronics',
        name: 'Bluthooth',
        imgsrc: 'https://rukminim1.flixcart.com/image/612/612/kcxpbww0/headphone/d/8/7/por-325-harmonics-twins-mini-portronics-original-imaftxsphyfg366u.jpeg?q=70'
    },
    {
        id: 10,
        category: 'Electronics',
        name: 'Laptop',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kmwcuq80/computer/d/z/k/na-gaming-laptop-acer-original-imagfp8wrqwe6v6w.jpeg?q=70'
    },
    {
        id: 11,
        category: 'Electronics',
        name: 'Speaker',
        imgsrc: 'https://rukminim1.flixcart.com/image/612/612/k1wgx3k0/speaker/home-audio-speaker/e/7/w/jbl-party-box-1000-original-imafhd6vedurumxk.jpeg?q=70'
    },
    {
        id: 12,
        category: 'Electronics',
        name: 'Bose',
        imgsrc: 'https://rukminim1.flixcart.com/image/612/612/krs40i80/headphone/s/b/j/quitecomfort-earbuds-bose-original-imag5gf6zspqzh5h.jpeg?q=70'
    },
    {
        id: 13,
        category: 'Electronics',
        name: 'Laptop',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kj0bp8w0/computer/g/2/f/dell-original-imafyzfnyn9egnkf.jpeg?q=70'
    },
    {
        id: 14,
        category: 'Fashion',
        name: 'Cloth',
        imgsrc: 'https://rukminim1.flixcart.com/image/660/792/khuvxjk0-0/t-shirt/7/l/j/s-cv-ts97-vero-lie-original-imafxruepxg2zswb.jpeg?q=50'
    },
    {
        id: 15,
        category: 'Fashion',
        name: 'Cloth',
        imgsrc: 'https://rukminim1.flixcart.com/image/150/150/kq9ta4w0/ethnic-set/v/k/s/m-ssc-152-nblu-labasana-original-imag4bc2wtsrzefu.jpeg?q=70'
    },
    {
        id: 16,
        category: 'Fashion',
        name: 'Cloth',
        imgsrc: 'https://rukminim1.flixcart.com/image/660/792/kr58yvk0/t-shirt/a/q/y/m-pckpssgfi31087-peter-england-original-imag4zrmzfkxcrzf.jpeg?q=50'
    },
    {
        id: 17,
        category: 'Fashion',
        name: 'Cloth',
        imgsrc: 'https://rukminim1.flixcart.com/image/660/792/krp94sw0/t-shirt/8/w/z/m-adss21cn031b-adrenex-original-imag5fcu5uxfgeag.jpeg?q=50'
    },
    {
        id: 18,
        category: 'Fashion',
        name: 'Cloth',
        imgsrc: 'https://rukminim1.flixcart.com/image/660/792/khuvxjk0-0/t-shirt/7/l/j/s-cv-ts97-vero-lie-original-imafxruepxg2zswb.jpeg?q=50'
    },
    {
        id: 19,
        category: 'Fashion',
        name: 'Cloth',
        imgsrc: 'https://rukminim1.flixcart.com/image/660/792/ks4yz680/t-shirt/x/v/b/m-adss21cn060d-adrenex-original-imag5rwmfmwxma9f.jpeg?q=50'
    },
    {
        id: 20,
        category: 'Fashion',
        name: 'Cloth',
        imgsrc: 'https://rukminim1.flixcart.com/image/660/792/kklhbbk0/shirt/c/r/p/m-hlsh012348-highlander-original-imafzwpbwhp3njjx.jpeg?q=50'
    },
    {
        id: 21,
        category: 'Fashion',
        name: 'Shirt',
        imgsrc: 'https://rukminim1.flixcart.com/image/660/792/kr9jafk0/t-shirt/l/s/m/m-pjkcpsnfo24457-peter-england-original-imag53ec9rhgt869.jpeg?q=50'
    },
    {
        id: 22,
        category: 'Fashion',
        name: 'Cloth',
        imgsrc: 'https://rukminim1.flixcart.com/image/660/792/kmax8y80/t-shirt/q/c/l/m-a1384-0013-levi-s-original-imagf8jruyynhhnr.jpeg?q=50'
    },
    {
        id: 23,
        category: 'Appliances',
        name: 'Freeze',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kl2mljk0/refrigerator-new/m/i/v/rr19a241bgs-nl-2-2021-samsung-original-imagy9pyfszpmgwm.jpeg?q=70'
    },
    {
        id: 24,
        category: 'Appliances',
        name: 'TV',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kq6yefk0/television/e/p/w/l50m5-5ain-mi-original-imag4969ybwxqwza.jpeg?q=70'
    },
    {
        id: 25,
        category: 'Appliances',
        name: 'Tv',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kingqkw0/television/w/b/y/motorola-43sauhdmq-original-imafydykpnw3hzgv.jpeg?q=70'
    },
    {
        id: 26,
        category: 'Appliances',
        name: 'TV',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kae95e80/television/r/g/m/realme-tv-43-original-imafrz78gbgx3zz5.jpeg?q=70'
    },
    {
        id: 27,
        category: 'Appliances',
        name: 'Freeze',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kl2mljk0/refrigerator-new/m/i/v/rr19a241bgs-nl-2-2021-samsung-original-imagy9pyfszpmgwm.jpeg?q=70'
    },
    {
        id: 28,
        category: 'Appliances',
        name: 'Washing',
        imgsrc: 'https://rukminim1.flixcart.com/image/300/300/krz97rk0/washing-machine-new/g/2/4/diva-aqua-vx-ifb-original-imag5ngqvnsgwxhy.jpeg?q=90'
    },
    {
        id: 29,
        category: 'Appliances',
        name: 'AC',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/k55n0y80/air-conditioner-new/t/x/z/ir185rho-1-5-split-dual-inverter-onida-original-imafnphfauxd5j8e.jpeg?q=70'
    },
    {
        id: 30,
        category: 'Appliances',
        name: 'AC',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/klgx0280/air-conditioner-new/d/x/p/1-5t-flexichill-5s-copr-inv-split-whirlpool-inverter-original-imagyhgy37am2fwu.jpeg?q=70'
    },
    {
        id: 31,
        category: 'Appliances',
        name: 'Freeze',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kl2mljk0/refrigerator-new/m/i/v/rr19a241bgs-nl-2-2021-samsung-original-imagy9pyfszpmgwm.jpeg?q=70'
    },
    {
        id: 32,
        category: 'Appliances',
        name: 'AC',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/air-conditioner-new/k/o/4/raw518hedo-window-hitachi-fixed-speed-original-imagfy3cmnm7m4wg.jpeg?q=70'
    },

    {
        id: 33,
        category: 'Appliances',
        name: 'Freeze',
        imgsrc: 'https://rukminim1.flixcart.com/image/312/312/kl2mljk0/refrigerator-new/m/i/v/rr19a241bgs-nl-2-2021-samsung-original-imagy9pyfszpmgwm.jpeg?q=70'
    },

]

export default productList;