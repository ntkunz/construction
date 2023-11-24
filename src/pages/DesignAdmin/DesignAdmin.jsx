import "./DesignAdmin.scss";
import Contact from "../../components/Contact/Contact";

export default function DesignAdmin() {
   return (
      <main className="design-admin">
         <h1>Good day design office!</h1>
         <h2>I'd like to put my hat in the ring for the part-time office administrator position<br /><br />- Nicholas</h2>

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


         <h3>Design Examples</h3>
         <a className="site-link" href="https://helping-neighbors.nicholaskunz.com">Personal Web Develpment Project</a>
         <a className="site-link" href="https://www.edgecitywoodworking.com/">EdgeCity Woodworking School (Photography and Layout)</a>
         <a className="site-link" href="https://www.youtube.com/watch?v=9jEGLPJ2JR4">Video for BloodWizard x Adidad colab shoe (Illustrator layout and video production)</a>
         <a
            className="site-link"
            href='/SNOW 13_14 FINAL DRAFT.pdf'
            download='SNOW 13_14 FINAL DRAFT.pdf'>
            Download iNi clothing catalog
         </a>
         <img className="dark-image" src="./nwlogofull.png" alt="NeedleWorks logo" />
         <img className="dark-image" src="./fsbanner.png" alt="Forest Service Web Banner" />

         <p>Well, I'll need to get my external harddrive out of storage (don't ask) to add more examples. I have to run today but if you don't check this until Monday, there will be more examples then :)</p>
         <img className="resume-image" src="/nicholas_and_pup.jpg" alt="Nicholas and Pup" />
         <p>We hope you have a wonderful day!</p>

      </main>

   )
}