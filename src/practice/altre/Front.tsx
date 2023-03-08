const Front = () => {

    return (
        <div>
            <div className="pt-12 flex flex-col items-center gap-10">
                <h2 className="text-pink-500 text-4xl font-bold"> Looking For An Office? </h2>
                <div className="p-2 w-1/2 flex border-2 border-rose-600 ">
                    <select className="flex-1 outline-none" name="rentalType">
                        <option value="Rent"> Rent </option>
                        <option value="Lease"> Lease </option>
                    </select>
                    <select className="flex-1 outline-none" name="officeType">
                        <option value="IT/ITES"> IT/ITES </option>
                        <option value="Sales"> Sales </option>
                        <option value="Retail"> Retail </option>
                    </select>
                    <select className="flex-1 outline-none" name="location">
                        <option value="Delhi"> Delhi </option>
                        <option value="Mumbai"> Mumbai </option>
                        <option value="Chennai"> Chennai </option>
                        <option value="Banglore"> Banglore  </option>
                    </select>
                    <input className="border-0 outline-none" type="number" />
                    <select className="flex-1" name="spaceType">
                        <option value="Coworking"> Coworking </option>
                        <option value="Sublease"> Sublease </option>
                    </select>
                    <img className="w-4 px-4 bg-pink-400 box-content sm:w-6" src="https://cdn1.iconfinder.com/data/icons/trycons/32/search-1024.png" />
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="flex">
                        <div className="flex px-16 py-3 gap-4 border-2 border-pink-600 text-pink-600">
                            <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Permanent Office </p>
                        </div>
                        <div className="flex px-16 py-3 gap-4 border-2 border-pink-600 text-pink-600">
                            <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Office Space</p>
                        </div>
                        <div className="flex px-16 py-3 gap-4 border-2 border-pink-600 text-pink-600">
                            <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Sales Space </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex px-16 py-3 gap-4 border-2 border-pink-600 text-pink-600">
                            <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> IT Space </p>
                        </div>
                        <div className="flex px-16 py-3 gap-4 border-2 border-pink-600 text-pink-600">
                            <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Retail Space </p>
                        </div>
                    </div>
                </div>
                <div id="services" className="flex flex-col p-8 items-center bg-buildings bg-cover w-full">
                    <h2 className="text-4xl font-bold"> Transactional Advisory Services </h2>
                    <div className="grid grid-cols-2 gap-5 mt-8">
                        <div className="flex bg-white p-8 gap-4 shadow-lg shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>Property Location Selection </p>
                        </div>

                        <div className="flex bg-white p-8 gap-4 shadow-lg shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>Lease Location Selection </p>
                        </div>
                        <div className="flex bg-white p-8 gap-4 shadow-lg shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>Office Location Selection </p>
                        </div>

                        <div className="flex bg-white p-8 gap-4 shadow-lg shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>Rental Location Selection </p>
                        </div>

                        <div className="flex bg-white p-8 gap-4 shadow-lg shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>Office Location Selection </p>
                        </div>

                        <div className="flex bg-white p-8 gap-4 shadow-lg shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>Rental Location Selection </p>
                        </div>

                        <div className="flex bg-white p-8 gap-4 shadow-lg shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>Rental Location Selection </p>
                        </div>
                    </div>
                </div>

                <div id="sectors" className="flex flex-col p-8 items-center">
                    <h2 className="text-4xl font-bold"> Key Sectors Served </h2>
                    <div className="grid grid-cols-4 gap-5 mt-8">
                        <div className="flex flex-col bg-white p-8 gap-4 shadow-2xl shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>IT/ITes </p>
                        </div>

                        <div className="flex flex-col bg-white p-8 gap-4 shadow-2xl shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Pharma </p>
                        </div>
                        <div className="flex flex-col bg-white p-8 gap-4 shadow-2xl shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Flexible Space </p>
                        </div>

                        <div className="flex flex-col bg-white p-8 gap-4 shadow-2xl shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Engineering</p>
                        </div>

                        <div className="flex flex-col bg-white p-8 gap-4 shadow-2xl shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Construction </p>
                        </div>

                        <div className="flex flex-col bg-white p-8 gap-4 shadow-2xl shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Government </p>
                        </div>

                        <div className="flex flex-col bg-white p-8 gap-4 shadow-2xl shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Foods & Beverages </p>
                        </div>

                        <div className="flex flex-col bg-white p-8 gap-4 shadow-2xl shadow-gray-400">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Civil </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-8 items-center">
                    <h2 className="text-4xl font-bold"> Value Prepositions </h2>
                    <div className="flex justify-between">
                        <div className="flex flex-col bg-white p-8">
                            <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>IT/ITes </p>
                        </div>

                        <div className="flex flex-col bg-white p-8">
                            <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Pharma </p>
                        </div>

                        <div className="flex flex-col bg-white p-8">
                            <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>IT/ITes </p>
                        </div>

                        <div className="flex flex-col bg-white p-8">
                            <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Pharma </p>
                        </div>

                        <div className="flex flex-col bg-white p-8">
                            <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p>IT/ITes </p>
                        </div>

                        <div className="flex flex-col bg-white p-8">
                            <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                            <p> Pharma </p>
                        </div>
                    </div>
                </div>

                <div id="about" className="flex flex-col bg-purple-600 py-24 justify-center">
                    <h2 className="text-white text-3xl mb-10 mx-auto font-bold"> About Us</h2>
                    <div className="flex justify-center gap-8">
                        <div className="flex flex-col bg-white w-1/3 rounded-md py-2">
                            <div className="flex">
                                <div className="rounded-lg">
                                    <div className="flex justify-evenly">
                                        <img className="w-36 rounded-full mt-6" src="https://www.altre.co.in/wp-content/uploads/2022/11/profile-img-2-150x150.png" />
                                        <div className="mt-12 text-purple-700 font-semibold">
                                            <p className="text-2xl"> Swetta Sawhney</p>
                                            <p className="text-lg"> Founder & CEO </p>
                                        </div>
                                    </div>
                                    <p className="px-4 mt-4"> Shweta is an expert in the real estate sector with 20+ years of experience in the industry. She has started AltRE with the vision to create a truly corporate focused consulting platform.
                                        With her vast experience in the Real estate consulting space, she has had the privilege to be in the centre of evolution of real estate industry while gaining diverse experiences across Project Management, Transaction management and Office brokerage.
                                        She has led and successfully transacted over 35+ million sq. ft. of prime office space for Corporate Occupiers, including lease acquisitions, renegotiations, asset dispositions,sub – leasing etc.
                                        Shweta’s inherent strengths lie in innovative deal structuring, client servicing and relationship management; She is a trusted advisor to both developers and occupier clients across India office markets.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white w-1/3 rounded-md py-2">
                            <div className="flex">
                                <div className="rounded-xl">
                                    <div className="flex justify-evenly">
                                        <img className="w-36 rounded-full mt-6" src="https://www.altre.co.in/wp-content/uploads/2022/11/profile-img1-150x150.png" />
                                        <div className="mt-12 text-purple-700 font-semibold">
                                            <p className="text-2xl"> Vamsi Alla</p>
                                            <p className="text-lg"> CTO </p>
                                        </div>
                                    </div>
                                    <p className="px-4 mt-4">Vamsi Alla comes to AlTRE as a Result Oriented Technology executive and leader with 20+ years of experience conceptualizing, building consensus for delivering complex scalable SaaS, and enterprise solutions. He has a successful track record of building software products, custom applications, and infrastructure to optimize business processes and accomplish strategic goals. He is skilled in combining entrepreneurial drive with technical expertise in software development, network /infrastructure design, client/vendor relationship management to optimize processes and deliver business value to clients and stakeholders.

                                        He believes that a strong leadership is required for successful execution and leads IT teams with superior operational excellence. He is a technology agnostic leader that can evaluate and execute any technology solution that fit the needs of customer and not the other way around. When not working, you can find him as an active member in the community. He believes in giving back to the society by volunteering his expertise and time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="contact" className="py-16">
                    <div className="flex flex-col bg-purple-800 rounded-xl py-16 px-48 items-center text-4xl gap-y-6">
                        <h1 className="font-bold text-white"> Contact Us</h1>
                        <div className="flex gap-4">
                            <input className="px-3 py-5 text-black outline-none" type="text" placeholder="Name" />
                            <input className="px-3 py-5 text-black outline-none" type="email" placeholder="Email" />
                        </div>
                        <button className="bg-pink-500 px-4 py-2" type="submit"> submit </button>
                    </div>
                </div>

                <div className="flex pt-10 px-12 justify-around bg-purple-800 text-white">
                    <div className="flex flex-col gap-4 w-5/12">
                        <p className="text-2xl mb-2"> ABOUT US</p>
                        <p> AltRE is the world’s ONLY data and AI enabled platform for corporate real estate occupiers, servicing their needs related to their office portfolio at the click of a button.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-2xl mb-2"> CONTACT US</p>
                        <p className="flex flex-col">
                            <span> Wework forum, DLF Cybercity, <span> Gurgaon </span></span>
                        </p>
                        <p> info@altre.co.in </p>
                    </div>
                    <div>
                        <p className="text-2xl mb-2"> QUICK LINKS</p>
                        <p> Home </p>
                        <p> Services </p>
                        <p> Sectors </p>
                        <p> About Us </p>
                        <p> Contact Us </p>
                    </div>
                </div>
            </div>
            <div className="flex text-white justify-center bg-pink-500 py-3">
                        <p> Copyright © 2022 altre. All rights reserved </p>
                    </div>
        </div>
    )
}

export default Front;