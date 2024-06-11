import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Research = () => {
  return (
   <>
   <Navbar/>
   {/* <!-- Add the following Tailwind CSS classes to your HTML structure --> */}

{/* <!-- Newsletter Section --> */}
<div class="newsletter-section bg-fbfbdf reasearch-bg">
    <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/63ed0834de7e353db025c882_Frame%203.svg" loading="lazy" alt="" class="image w-full h-full object-cover rounded-lg" />
</div>

{/* <!-- Research Collections --> */}
<h2 class="text-5xl font-bold text-gray-800 mb-4 text-center mt-7 ">Latest Articles</h2>
<div fs-cmsfilter-element="list" role="list" class="research-collections w-dyn-items grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
  
    {/* <!-- Research Card Item --> */}
    <div role="listitem" class="collection-item-7 w-dyn-item">
        <div data-w-id="11eac12a-cc10-076d-80c4-c1eeeac9a902" class="research-card-wrapper">
            <a href="https://www.imumz.com/post/will-your-child-be-impacted-by-meditating-in-pregnancy-what-science-is-saying" class="blog45_item-link w-inline-block">
                <div class="research-card-image-wrapper">
                    <img src="https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63ed0b7892483d7b33b65d7a_WhatsApp%20Image%202023-02-15%20at%208.53.53%20PM%20(1).jpeg" loading="lazy" alt="" class="research-card-image rounded-lg" />
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <div fs-cmsfilter-field="category" class="text-block-112 font-sans">Monthly Growth</div>
                        <div class="reseach-card-date text-gray-500">June 12, 2023</div>
                    </div>
                    <h3 class="heading-159 limit-name-text font-sans text-lg font-bold">Will your child be impacted by meditating in pregnancy? What science is saying?</h3>
                </div>
            </a>
        </div>
    </div>

    {/* <!-- Repeat similar structure for other items --> */}

    {/* <!-- Research Card Item --> */}
    <div role="listitem" class="collection-item-7 w-dyn-item">
        <div data-w-id="11eac12a-cc10-076d-80c4-c1eeeac9a902" class="research-card-wrapper">
            <a href="https://www.imumz.com/post/there-is-lot-of-buzz-about-garbh-sanskar-mindfulness-in-pregnancy-will-this-really-help-your-baby-in-pregnancy" class="blog45_item-link w-inline-block">
                <div class="research-card-image-wrapper">
                    <img src="https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63ecf82bd1ae7535b0f3567e_WhatsApp%20Image%202023-02-15%20at%207.05.14%20PM%20(1).jpeg" loading="lazy" alt="" class="research-card-image rounded-lg" />
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <div fs-cmsfilter-field="category" class="text-block-112 font-sans">Garbh Sanskar</div>
                        <div class="reseach-card-date text-gray-500">June 12, 2023</div>
                    </div>
                    <h3 class="heading-159 limit-name-text font-sans text-lg font-bold">There is lot of buzz about Garbh sanskar (Mindfulness in pregnancy) Will this really help your baby in pregnancy?</h3>
                </div>
            </a>
        </div>
    </div>

    {/* <!-- Research Card Item --> */}
    <div role="listitem" class="collection-item-7 w-dyn-item">
        <div data-w-id="11eac12a-cc10-076d-80c4-c1eeeac9a902" class="research-card-wrapper">
            <a href="https://www.imumz.com/post/most-important-thing-you-can-do-in-pregnancy-to-avoid-a-very-common-postpartum-depression" class="blog45_item-link w-inline-block">
                <div class="research-card-image-wrapper">
                    <img src="https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63ed030b29c15b22a35e89e9_WhatsApp%20Image%202023-02-15%20at%208.53.53%20PM.jpeg" loading="lazy" alt="" class="research-card-image rounded-lg" />
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <div fs-cmsfilter-field="category" class="text-block-112 font-sans">Pregnancy Tips</div>
                        <div class="reseach-card-date text-gray-500">June 12, 2023</div>
                    </div>
                    <h3 class="heading-159 limit-name-text font-sans text-lg font-bold">Most important thing you can do in pregnancy to avoid a very common postpartum depression.</h3>
                </div>
            </a>
        </div>
    </div>

    {/* <!-- Research Card Item --> */}
    <div role="listitem" class="collection-item-7 w-dyn-item">
        <div data-w-id="11eac12a-cc10-076d-80c4-c1eeeac9a902" class="research-card-wrapper">
            <a href="https://www.imumz.com/post/your-food-in-pregnancy-can-make-your-healthy-for-life-long-heres-the-proof" class="blog45_item-link w-inline-block">
                <div class="research-card-image-wrapper">
                    <img src="https://assets-global.website-files.com/630c4a66b123fb1a74ccb8a7/63ecffc7cf42711331b56b0d_WhatsApp%20Image%202023-02-15%20at%208.53.54%20PM-p-800.jpeg  " loading="lazy" alt="" class="research-card-image rounded-lg" />
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <div fs-cmsfilter-field="category" class="text-block-112 font-sans">Fetal Development</div>
                        <div class="reseach-card-date text-gray-500">June 12, 2023</div>
                    </div>
                    <h3 class="heading-159 limit-name-text font-sans text-lg font-bold">How to improve your child's intelligence right from the womb</h3>
                </div>
            </a>
        </div>
    </div>
</div>

<Footer/>

   </>
  )
}

export default Research