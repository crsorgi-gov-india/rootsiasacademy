/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Book, Users, UserCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-stone-900">ROOTS IAS ACADEMY</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-amber-600 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-amber-600 transition-colors">About Us</a></li>
            <li><a href="#courses" className="hover:text-amber-600 transition-colors">Courses</a></li>
            <li><a href="#testimonials" className="hover:text-amber-600 transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[60vh] bg-gradient-to-r from-amber-50 to-orange-100 flex items-center justify-center text-center">
        <div className="z-10 p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg max-w-3xl mx-auto">
          <h1 className="text-5xl font-serif font-extrabold text-stone-900 mb-4 leading-tight">Empowering Futures Through Excellence</h1>
          <p className="text-xl text-stone-700 mb-8">Your journey to success in IAS begins here. Expert coaching in Srinagar.</p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors shadow-md">Explore Courses</button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">About ROOTS IAS ACADEMY</h2>
        <p className="text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed">
          ROOTS IAS ACADEMY is dedicated to nurturing the brightest minds for civil services. Located in the serene environment of Srinagar, we provide comprehensive coaching, personalized mentorship, and a conducive learning atmosphere. Our experienced faculty and meticulously designed curriculum ensure that every student is well-prepared to achieve their dreams.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-stone-800 mb-3">Experienced Faculty</h3>
            <p className="text-stone-600">Learn from the best educators with years of experience in civil services coaching.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-stone-800 mb-3">Comprehensive Curriculum</h3>
            <p className="text-stone-600">Our courses cover all aspects of the IAS examination, from prelims to interviews.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-stone-800 mb-3">Personalized Mentorship</h3>
            <p className="text-stone-600">Receive individual attention and guidance to overcome challenges and optimize your preparation.</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-stone-100 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-48 bg-amber-100 rounded-t-xl">
                <BookOpen size={64} className="text-amber-600" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">IAS Foundation Course</h3>
                <p className="text-stone-700 mb-4">A complete program for beginners, covering all fundamental concepts and syllabus.</p>
                <button className="text-amber-600 font-medium hover:underline">Learn More &rarr;</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-48 bg-amber-100 rounded-t-xl">
                <Book size={64} className="text-amber-600" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">Optional Subjects Coaching</h3>
                <p className="text-stone-700 mb-4">Specialized coaching for various optional subjects with in-depth analysis.</p>
                <button className="text-amber-600 font-medium hover:underline">Learn More &rarr;</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-48 bg-amber-100 rounded-t-xl">
                <Users size={64} className="text-amber-600" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">Interview Guidance & Test Series</h3>
                <p className="text-stone-700 mb-4">Sharpen your skills with our comprehensive test series and expert interview preparation.</p>
                <button className="text-amber-600 font-medium hover:underline">Learn More &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="bg-amber-50 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-12">Meet Our Esteemed Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="flex items-center justify-center w-32 h-32 rounded-full mx-auto mb-4 bg-amber-100">
                <UserCircle size={64} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-1">Dr. Aisha Khan</h3>
              <p className="text-amber-600 font-medium mb-2">History & Public Administration</p>
              <p className="text-stone-700 text-sm">Ph.D. in History, Former Civil Servant, 15+ years experience.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="flex items-center justify-center w-32 h-32 rounded-full mx-auto mb-4 bg-amber-100">
                <UserCircle size={64} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-1">Prof. Rajesh Sharma</h3>
              <p className="text-amber-600 font-medium mb-2">Economics & Current Affairs</p>
              <p className="text-stone-700 text-sm">M.A. Economics, Renowned Author, 12+ years teaching experience.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="flex items-center justify-center w-32 h-32 rounded-full mx-auto mb-4 bg-amber-100">
                <UserCircle size={64} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-1">Ms. Priya Singh</h3>
              <p className="text-amber-600 font-medium mb-2">Ethics & Essay Writing</p>
              <p className="text-stone-700 text-sm">UPSC Interview Panelist, Expert in Analytical Writing, 10+ years experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-12">Our Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-lg p-8 text-left">
            <p className="text-lg italic text-stone-700 mb-4">"ROOTS IAS ACADEMY provided me with the best guidance and resources. The faculty's dedication and personalized approach were instrumental in my success. Highly recommended!"</p>
            <p className="font-semibold text-stone-900">- Rahul Sharma, IAS Rank 23 (2023 Batch)</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-left">
            <p className="text-lg italic text-stone-700 mb-4">"The comprehensive test series and interview guidance at ROOTS IAS ACADEMY gave me the confidence I needed. I am forever grateful for their support."</p>
            <p className="font-semibold text-stone-900">- Fatima Ali, IPS Rank 45 (2024 Batch)</p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-12">Our Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-lg p-8 text-left">
            <p className="text-lg italic text-stone-700 mb-4">"ROOTS IAS ACADEMY provided me with the best guidance and resources. The faculty's dedication and personalized approach were instrumental in my success. Highly recommended!"</p>
            <p className="font-semibold text-stone-900">- Rahul Sharma, IAS Rank 23 (2023 Batch)</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-left">
            <p className="text-lg italic text-stone-700 mb-4">"The comprehensive test series and interview guidance at ROOTS IAS ACADEMY gave me the confidence I needed. I am forever grateful for their support."</p>
            <p className="font-semibold text-stone-900">- Fatima Ali, IPS Rank 45 (2024 Batch)</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-stone-100 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-8 text-left">
              <p className="text-lg italic text-stone-700 mb-4">"The faculty at ROOTS IAS ACADEMY are truly exceptional. Their guidance helped me clarity concepts and perform my best."</p>
              <div className="flex items-center mt-4">
                <img src="https://picsum.photos/seed/student4/50/50" alt="Student 1" className="w-12 h-12 rounded-full mr-4 object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-semibold text-stone-900">Ananya Sharma</p>
                  <p className="text-sm text-stone-600">UPSC Aspirant</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-left">
              <p className="text-lg italic text-stone-700 mb-4">"I wouldn't have achieved my goals without the rigorous training and supportive environment here. Thank you, ROOTS IAS!"</p>
              <div className="flex items-center mt-4">
                <img src="https://picsum.photos/seed/student5/50/50" alt="Student 2" className="w-12 h-12 rounded-full mr-4 object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-semibold text-stone-900">Vikram Singh</p>
                  <p className="text-sm text-stone-600">Civil Services Candidate</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-left">
              <p className="text-lg italic text-stone-700 mb-4">"The personalized attention and mock interviews were crucial. I felt fully prepared for every stage of the examination."</p>
              <div className="flex items-center mt-4">
                <img src="https://picsum.photos/seed/student6/50/50" alt="Student 3" className="w-12 h-12 rounded-full mr-4 object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-semibold text-stone-900">Pooja Kumari</p>
                  <p className="text-sm text-stone-600">Successful Applicant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Contact Us</h2>
        <p className="text-lg text-stone-700 max-w-2xl mx-auto mb-8">
          Have questions or ready to enroll? Fill out the form below or reach out to us directly.
        </p>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-left text-sm font-medium text-stone-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-stone-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-sm font-medium text-stone-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors shadow-md">Send Message</button>
          </form>
        </div>
        <p className="text-lg text-stone-700 max-w-2xl mx-auto mt-12 mb-8">
          Alternatively, you can reach us at:
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span className="text-stone-700">+91 12345 67890</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span className="text-stone-700">info@rootsias.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
            <span className="text-stone-700">Srinagar, Jammu & Kashmir</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 px-4 py-8 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} ROOTS IAS ACADEMY. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed with dedication in Srinagar.</p>
        </div>
      </footer>
    </div>
  );
}
