import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 w-100 hidden lg:block'>
                <img src={doctor} className ="mt-[-150px]"></img>
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary text-white'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appoinment today</h2>
                <p className='text-white'>পুতুল নাচের ইতিকথা।  লেখক মানিক বন্দোপাধ্যায়। লিখেছেন সেই ১৯৩৬ সালে। হিসাব যদি করি গল্পের প্লট আজ থেকে ৮৬ বছর আগের। আমি অভিভূত হই এই সময়াটাতে এসেও সব কিছুই দিব্যি রিলেট করা যাচ্ছে। সময়টা ৮৬ বছর আগের হলেও একটা ব্যাপার মিলে যায়। আর তা হলো আমাদের আবেগ, অনূভুতি,  চরিত্র। তখন যেমন ছিলো এখনও তেমনই আছে।
                    গল্পের মূল চরিত্র শশী, যাকে ঘিরে এ গল্প। শশী কলকাতা মেডিকেল কলেজ থেকে পাস করা ডাক্তার। সেখানে পড়তে যাওয়ার আগে সে ছিলো গ্রাম্য আর দশটা মানুষের মতই। পড়া শেষ করে ফিরে এসে সে সব কিছুকেই নিজের মতো করে দেখতে শুরু করে। এ পরিবর্তনের পেছনে হাত তার বন্ধু কুমুদের। যার সাথে তার পরিচয় মেডিকেল কলেজে
                </p>
                <div className='mt-10'>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>

            </div>
        </section>
    );
};

export default MakeAppointment;