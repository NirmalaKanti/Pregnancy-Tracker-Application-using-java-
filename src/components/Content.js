import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const blogs = [
    {
      category: 'Postnatal Care',
      title: '7 Months Pregnant: Symptoms, Diet, Exercises, and More',
      imageUrl: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64afc069cc53f4e8ae52c8de_2%20.%207%20Months%20Pregnant.jpg',
    },
    {
      category: 'Complications',
      title: 'What is placenta encapsulation? Should one consider consuming the placenta?',
      imageUrl: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64709e0efec7114b4aede3d5_12.%20What%20is%20placenta%20encapsulation-p-800.jpg',
    },
    {
      category: 'Garbha Sanskar',
      title: 'Garbha Sanskar: Deepening the Connection with Your Unborn Child',
      imageUrl: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63aab5a155d9f5f73f8372fe_6364b4fbac6fc6430ebe033c_When%20to%20start%20Garbha%20Sanskar%20in%20Pregnancy-p-500.png',
    },
  ];


  const contentData = [
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/651aff6368770316aff12a7f_Cover-p-500.jpg',
      description: 'Yoga for Expecting Moms: Asanas to Adopt & Avoid',
      link: 'https://www.imumz.com/post/yoga-for-expecting-moms-asanas-to-adopt-avoid',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/651affeabf28071b79e174e6_Cover-p-500.jpg',
      description: "Don't Ignore Itching in Pregnancy",
      link: 'https://www.imumz.com/post/dont-ignore-itching-in-pregnancy',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6508970fcca17508fff222ca_cover1-p-500.jpg',
      description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
      link: 'https://www.imumz.com/post/boosting-hemoglobin-levels-for-a-healthy-pregnancy',
      category: 'Garbh Sanskar'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63ff7a78fcca1a0d3c421f86_WhatsApp%20Image%202023-03-01%20at%209.36.33%20PM%20(1)-p-500.jpeg',
      description: 'Sleeping During Pregnancy: Right Positions, Dealing with Insomnia',
      link: 'https://www.imumz.com/post/sleeping-during-pregnancy-right-positions-dealing-with-insomnia',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63ff7ab9a62209132ec75b64_WhatsApp%20Image%202023-03-01%20at%209.39.45%20PM-p-500.jpeg',
      description: 'A Guide to Managing Loose Motions During Pregnancy',
      link: 'https://www.imumz.com/post/a-guide-to-managing-loose-motions-during-pregnancy',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816c7c2d6b0f0f888145e_633691f97e70db7c6a2cb5fe_weeK9-p-1080.jpeg',
      description: '9 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/9',
      category: 'Weeks and Trimesters'
    },
    ,
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816c50a9495621f364251_633690257e70db09812b41ff_week8-p-1080.jpeg',
      description: '8 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/8',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816c2ad6a6dba6ff6c0bd_63368a88b9a6e92dc9d14b10_week7-p-1080.jpeg',
      description: '7 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/7',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816bfc6e89fefb397173a_6336879d445b4c7be4556afb_week6%2520(1)-p-1080.jpeg',
      description: '6 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/6',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63373e40bd456968a44a62eb_37.jpg',
      description: '37 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/37',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633740edb277d96067c78f39_39.jpg',
      description: '36 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/36',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816beedd456b11ef2295c_6337403fc0f46f5c184d0a66_week38-p-1080.jpeg',
      description: '38 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/38',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816bdedd4565dc2f22958_63367ef11c6e2f88d9176502_week5-p-1080.jpeg',
      description: '5 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/5',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816b9823f990304e6bd23_6336c4af7e70db332f72f2f8_week33-p-1080.jpeg',
      description: '33 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/33',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816b9e685606c8117735d_63373a62b6cd181a893e572d_week34-p-1080.jpeg',
      description: '34 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/34',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816b4823f994f83e6bd17_63373d4c5c78a156b4cb73f9_week36-p-1080.jpeg',
      description: '36 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/36',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816b2e851f00fffd66cb8_63373a9e59ce8232b2e0d0e4_week35-p-1080.jpeg',
      description: '35 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/35',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816b11badd9c69ecb3e39_6336c10912da9585d87d4623_week30-p-1080.jpeg',
      description: '30 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/30',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816ae7d3b908a188b58b2_6336c201445b4cd7e5762e4c_week31-p-1080.jpeg',
      description: '31 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/31',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816a5e8d182cec67a0da8_6336af5f1e1effd5774d57f3_week27-p-1080.jpeg',
      description: '27 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/27',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816a43b99ec82165eb4bd_6336af458b3811121a671d1f_week26-p-1080.jpeg',
      description: '26  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/26',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816a1ddbb7e7740db194b_6336af6c24db17849bf0fc65_week28-p-1080.jpeg',
      description: '28  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/28',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816a0edd4564dbff22919_6336c026990e37e119160213_week29-p-1080.jpeg',
      description: '29  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/29',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/633816a0c3205187af1c6067_6336ae9e6dc2c04954c00f9b_week24-p-1080.jpeg',
      description: '24  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/24',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6338169a8c00c92e55b8d726_6336ae6a8165e2c32cae7995_week19-p-1080.jpeg',
      description: '19  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/19',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6338169a7d3b901c678b57ee_6336ae9462cf935b984c993b_week23-p-1080.jpeg',
      description: '23  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/23',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63381699e9faf7f386074695_6336ae810493f24f5eaf13a8_week21-p-1080.jpeg',
      description: '21  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/21',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63381698edd456f6fdf228e1_6336ae788165e2e0d6ae9231_week20-p-1080.jpeg',
      description: '20  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/20',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63381697ddbb7e812fdb190e_6336ae8c0773537d59b79a2e_week22-p-1080.jpeg',
      description: '20  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/20',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63381697ddbb7e812fdb190e_6336ae8c0773537d59b79a2e_week22-p-1080.jpeg',
      description: '22  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/22',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d3b99ec6f425eb479_63369ff298515ca375d0e844_week16-p-1080.jpeg',
      description: '16  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/16',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d7d3b906f4e8b578e_633696621e9b6f21564e1c1b_weeK11-p-1080.jpeg',
      description: '11  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/11',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d3b99eceb045eb476_63369c791e9b6f9a34555f3e_week15-p-1080.jpeg',
      description: '15  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/15',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d7b04fd3c2ac62388_63369414c9d071151c8adac0_weeK10-p-1080.jpeg',
      description: '10  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/10',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6338168df6ee972bb544af8b_63369730cf9a687b971bf6db_week12_baby-p-1080.jpeg',
      description: '12  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/12',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d823f997271e6bcf3_63369c60445b4c1c33659302_week14-p-1080.jpeg',
      description: '14  Weeks Pregnant: Garbh Sanskar, Symptoms and Tips',
      link: 'https://www.imumz.com/pregnancy-week/14',
      category: 'Weeks and Trimesters'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6507116659d1717077de2cc1_cover-p-500.jpg',
      description: 'Deworming During Pregnancy',
      link: 'https://www.imumz.com/post/deworming-during-pregnancy',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64ece540b56cb84e8e4edf4a_Screenshot%202023-08-28%20at%2011.49.25%20PM-p-800.png',
      description: 'Epigentics-Can Babys health and personality be changed in womb? ',
      link: 'https://www.imumz.com/post/epigenetics-can-babys-health-and-personality-be-changed-while-in-the-womb',
      category: 'Baby Care'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64e1460ba75ba28841667a0c_6.%20No%20Period%20After%20Pregnancy%20(1)-p-500.jpg',
      description: 'No Periods after Pregnancy:When to Worry',
      link: 'https://www.imumz.com/post/no-period-after-pregnancy-when-to-worry',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64d506647910d8a4214fd97f_5.%20normal%20progesterone%20levels%20(1)-p-500.jpg',
      description: 'Progestine Range in Pregnancy:Whats Considered as Normal?',
      link: 'https://www.imumz.com/post/progesterone-range-in-pregnancy-whats-considered-normal',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64c92ce914e2e48d4abd8d1d_4.%20%20joint%20pain%20pregnancy%20(1)-p-500.jpg',
      description: 'Relieving Hand and Finger Pain in Pregnancy:Expert Advice and Self-Care Strategies',
      link: 'https://www.imumz.com/post/relieving-hand-and-finger-joint-pain-in-pregnancy-expert-advice-and-self-care-strategies-2',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64c91b9540e736a931624bb8_2.%20single%20loop%20of%20cord%20around%20neck%20(1)-p-500.jpg',
      description: 'Coping with nuchal Chord Diagnosis:Support and Resources for Expecting Parents',
      link: 'https://www.imumz.com/post/coping-with-nuchal-chord-diagnosis-support-and-resources-for-expecting-parents-2',
      category: 'Baby Care'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64b09c1dcb385075ec691a93_5.%20Quick%20and%20Easy%20Amniotic%20Fluid%20Swab%20Test%20at%20Home-p-500.png',
      description: 'Quick and Easy Amniotic Fluid Swab Test at Home',
      link: 'https://www.imumz.com/post/quick-and-easy-amniotic-fluid-swab-test-at-home',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64b09867da4be1f8809ab718_6.%205%20Helpful%20Garbh%20Sanskar%20Books%20for%20Pregnant%20Women-p-500.jpg',
      description: '5 Helpful Garbha Sanskar Books for Pregnant Women',
      link: 'https://www.imumz.com/post/5-helpful-garbh-sanskar-books-for-pregnant-women',
      category: 'Baby Care'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64b097e35dea089ddc8537c2_Screenshot%202023-07-11%20at%2010.08.33%20AM%20(1)-p-500.png',
      description: 'What is a Circumvallate Placenta?',
      link: 'https://www.imumz.com/post/what-is-a-circumvallate-placenta',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64b0924d27f2feed01716c0f_3.%20What%20is%20Posterior%20Placenta-p-500.jpg',
      description: 'What is Posterior Placenta and How It Impacts Your Pregnancy',
      link: 'https://www.imumz.com/post/what-is-posterior-placenta-and-how-it-impacts-your-pregnancy',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64b046fbb64edd452609922d_1.%20Understanding%20Evaporation%20Lines%20on%20Pregnancy%20Tests-p-500.jpg',
      description: 'Understanding Evaporation Lines on Pregnancy Tests',
      link: 'https://www.imumz.com/post/understanding-evaporation-lines-on-pregnancy-tests',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64afc069cc53f4e8ae52c8de_2%20.%207%20Months%20Pregnant.jpg',
      description: '7 Months Pregnant: Symptoms, Diet, Exercises, and More',
      link: 'https://www.imumz.com/post/7-months-pregnant-symptoms-diet-exercises-and-more',
      category: 'Postnatal Care'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6486d09dfd56bc4a61db6544_16.%20single%20and%20twin%20pregnancies-p-500.jpg',
      description: 'Key differences between single and twin pregnancies',
      link: 'https://www.imumz.com/post/key-differences-between-single-and-twin-pregnancies',
      category: 'Complications'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6486ae1aeb8333d86f63daef_15.%20coconut%20water%20increase%20amniotic%20fluid-p-500.jpg',
      description: 'Does coconut water increase amniotic fluid?',
      link: 'https://www.imumz.com/post/does-coconut-water-increase-amniotic-fluid',
      category: 'Nutrition'
    },
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6476ddd492415ad18a208b2d_13.%20TIFFA%20Scan%20(1)-p-500.jpg',
      description: 'All About Ectopic Pregnancy.',
      link: 'https://www.imumz.com/post/all-about-ectopic-pregnancy',
      category: 'Complications'
    }
    ,
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/648064636bdea3f38b251c6b_14.%20Ectopic%20Pregnancy-p-500.png',
      description: 'What Is TIFFA Scan?',
      link: 'https://www.imumz.com/post/what-is-tiffa-scan',
      category: 'Baby Care'
    }
    ,
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64709e0efec7114b4aede3d5_12.%20What%20is%20placenta%20encapsulation.jpg',
      description: 'What is placenta encapsulation? Should one consider consuming the placenta?',
      link: 'https://www.imumz.com/post/what-is-placenta-encapsulation-should-one-consider-consuming-the-placenta',
      category: 'Complications'
    }
    ,
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/646dd00cc2ebf946aa9fc7a3_11.%20Breathing-p-500.png',
      description: 'The Power of Breath: Harnessing Breathwork for a Calm Pregnancy ',
      link: 'https://www.imumz.com/post/the-power-of-breath-harnessing-breathwork-for-a-calm-pregnancy',
      category: 'Complications'
    }
    ,
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/646ce99985c0ea188a665124_10.%20relaxation%20techniques1-p-500.png',
      description: 'Ultimate Relaxation Techniques to Stop Motions in Pregnancy',
      link: 'https://www.imumz.com/post/ultimate-relaxation-techniques-to-stop-motions-in-pregnancy',
      category: 'Complications'
    }
    ,
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/646263ba005896236fa9e287_wepik-export-202305151654052wSj.png',
      description: 'Garbha Sanskar: Deepening the Connection with Your Unborn Child',
      link: 'https://www.imumz.com/post/garbha-sanskar-deepening-the-connection-with-your-unborn-child',
      category: 'Garbh Sanskar'
    }
    ,
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/6442288a4574c357f3ed696b_WhatsApp%20Image%202023-04-21%20at%2011.01.52%20AM.jpeg',
      description: 'After how many weeks is an IVF pregnancy safe',
      link: 'https://www.imumz.com/post/after-how-many-weeks-is-an-ivf-pregnancy-safe',
      category: 'Complications'
    }
    ,
    {
      image: 'https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/64c9393662e7981a0c6b1f8b_Cover%20copy-p-500.jpg',
      description: 'Pregnancy diet month by month',
      link: 'https://www.imumz.com/post/pregnancy-diet-month-by-month',
      category: 'Nutrition'
    }
    // Add more items as needed
  ];

  const filteredContent = contentData.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
     <div>
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      <div className="container mx-auto py-8 mt-32">
        <h2 className="text-2xl font-bold mb-6">Recommended</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${blog.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px'
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                <div className="mb-2">
                  <span className="text-sm bg-white text-black rounded px-3 py-2">
                    {blog.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      <div className="mt-20 container mx-auto px-6 py-12 ">
        <div className="mb-8 flex justify-between items-center">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md py-2 px-4"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-2/3 flex justify-end items-center space-x-4">
            <span className="text-gray-600 font-semibold">Filter by:</span>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md"
              onClick={() => setSearchTerm('Birth Stories')}
            >
              Birth Stories
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md"
              onClick={() => setSearchTerm('Garbh Sanskar')}
            >
              Garbh Sanskar
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md"
              onClick={() => setSearchTerm('Nutrition')}
            >
              Nutrition
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md"
              onClick={() => setSearchTerm('Weeks and Trimesters')}
            >
              Weeks and Trimesters
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md"
              onClick={() => setSearchTerm('Complications')}
            >
              Complications
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredContent.map((item, index) => (
    <a href={item.link} key={index} className="bg-white shadow-md rounded-3xl overflow-hidden">
      <div>
        <img
          src={item.image}
          alt={item.description}
          className="w-full h-80 object-cover" // Increased height from h-40 to h-80
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{item.description}</h3>
          <p className="text-sm text-gray-600 mb-2">{item.date}</p>
          <p className="text-sm text-gray-500">{item.category}</p>
        </div>
      </div>
    </a>
  ))}
</div>


      </div>
      <Footer />
    </>
  );
}

export default Content;