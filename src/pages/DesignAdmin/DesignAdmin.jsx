import "./DesignAdmin.scss";
// import Contact from "../../components/Contact/Contact";

export default function DesignAdmin() {


   const designExamples = [
      {
         title: 'Blood Wizard x Adidas Colab Shoe',
         role: 'Assisted layout, print preparation, and video production',
         images: ['/design_images/bw_x_adidas_shoe_layout.jpg'],
         description: `An exciting time in a smaller brand's life, The team and I at Blood Wizard Skateboards were able to release a shoe with Adidas Originals`,
         link: {
            linkText: 'Watch promotional video',
            linkUrl: 'https://www.youtube.com/watch?v=9jEGLPJ2JR4'
         },
      },
      {
         title: 'Blood Wizard Board Catalog',
         role: 'Vectorized and colored graphics, print preparation, and card layout',
         images: ['/design_images/bw_catalog_2014.jpg'],
         description: 'Skateboarding is great'
      },
      {
         title: 'Helping Neighbors',
         role: 'Web Design and Development',
         images: [],
         description: 'A recent personal project to learn web development and design',
         link: {
            linkText: 'Visit website',
            linkUrl: 'https://helping-neighbors.nicholaskunz.com',
         },
      },
      {
         title: 'Aperture Rings for Camera Shutters',
         role: `Sourced and produced laser cut aperture rings for frankensteined camera lenses and shutters`,
         images: ['/design_images/calipers_and_aperture_ring.jpg', '/design_images/seiko_masking_tape_calibrate.jpg', '/design_images/straight_aperture_ring.png',
            '/design_images/curved_aperture_ring.png', '/design_images/aperture_ring_1.jpg', '/design_images/aperture_ring_2.jpg', '/design_images/aperture_ring_3.jpg'],
         description: 'When I stepped into my role at RayKo Photography Center, the proprietor had been collecting mis-matched lenses to shutters for years but had yet to find a way to produce the necessary aperture scales to sync the two. I was tasked with this and after some iterations and researching, I found an engraver able to take my Illustrator files and create perfect scales for the shutters. This transformed many many door-stops into sellable lens/shutter combinations',
      },
      {
         title: 'Book and Zine layouts',
         role: 'Layout and production',
         images: ['/design_images/reflections_screenthot.png', '/design_images/photography_book_spread.png', '/design_images/japan_book_spread.png', '/design_images/gift_horse_book_turning_page.jpg'],
         description: 'Some different personal and group zine and book projects from over the years'
      },
      {
         title: 'Forest Service Banner',
         role: 'Banner design',
         images: ['public/design_images/fsbanner.png'],
         description: 'My early steps into digital production, I had the chance to create a website for the US Forest Service. Here is a piece that has survived since that time many moons ago'
      }
   ]


   return (
      <main className="design-admin">
         <h1>Good day design office!</h1>
         <h2>I am applying to your administration position</h2>
         <p>I've added here some design examples from my past. I understand that the position is for admin duties, not design work. I didn't feel it would hurt to show that I can assist in multiple ways if ever needed</p>

         <p>Thank you for your consideration and I look forward to hearing from you</p>

         <p>See resume and cover letter for contact information</p>

         <h3>Technologies I've worked with</h3>
         <ul><li>Adobe Photoshop</li><li>Adobe InDesign</li><li>Adobe Illustrator</li><li>Microsoft Word</li><li>Microsoft Excel/Google Sheets</li><li>Quickbooks Pro</li><li>VSCode</li><li>Figma</li><li>Fusion360</li><li>Notion</li></ul>

         <h3>My Resume</h3>
         <object
            type="application/pdf"
            data="/nicholas-kunz-resume-design-office-admin.pdf"
            width="100%"
            className="pdf-object"
         />
         <a
            href='/nicholas-kunz-resume-design-office-admin.pdf'
            download='nicholas-kunz-resume-design-office-admin.pdf'>
            Download Resume
         </a>

         <h3>Cover Letter</h3>
         <object
            type="application/pdf"
            data="/nicholas-kunz-resume-design-office-admin-cover-letter.pdf"
            width="100%"
            className="pdf-object"
         />
         <a
            href='/nicholas-kunz-resume-design-office-admin-cover-letter.pdf'
            download='nicholas-kunz-resume-design-office-admin-cover-letter.pdf'>
            Download Cover Letter
         </a>

         <aside className="excuse-me">Please excuse the quick pdf page formatting. Work in progress...</aside>

         <section className="design-examples">
            <h2>Design Examples</h2>
            {designExamples.map((item, index) => (
               <div key={index} className="design-item">
                  <h3 className="design-item__title">{item.title}</h3>
                  <p className="design-item__role">{item.role}</p>
                  {item.images.map((image, index) => (
                     <img key={index} className="design-item__image" src={image} alt={item.title} />
                  ))}
                  <p className="design-item__description">{item.description}</p>
                  {item.link && <a className="design-item__link" target="_blank" rel="noreferrer" href={item.link.linkUrl}>{item.link.linkText}</a>}
               </div>
            ))}
         </section>



         <img className="resume-image" src="/nicholas_and_pup.jpg" alt="Nicholas and Pup" />
         <p>We hope you have a wonderful day!</p>
         <p>Nicholas (and Cappo) Kunz</p>
         <p>MrNicholasKunz@gmail.com</p>

      </main>

   )
}