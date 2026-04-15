import React from 'react';
import {
  Mail,
  Smartphone,
  MapPin,
  Instagram,
  Briefcase,
  Award,
  Cpu,
  Lightbulb,
  GraduationCap,
  Languages as LangIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { resumeData } from '../resumeData';

const HybridResume: React.FC = () => {
  const { personalInfo, workExperience, workshops, hardSkills, softSkills, education, languages } = resumeData;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 print:p-0 print:bg-white overflow-x-hidden">
      <motion.div
        className="max-w-[1000px] mx-auto bg-white shadow-premium overflow-hidden print:shadow-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Header Section */}
        <div className="relative">
          {/* Layer 1: White Area (Name & Title) */}
          <div className="pt-12 pb-6 px-12 bg-white flex items-end">
            <div className="w-[220px] shrink-0"></div> {/* Reduced spacer to tuck text closer to photo */}
            <div className="pl-12 pb-2">
              <h1 className="text-5xl font-extrabold text-[#333C4E] tracking-normal leading-none">{personalInfo.name}</h1>
              <p className="text-2xl text-[#4FA1A7] font-semibold mt-4">{personalInfo.role}</p>
            </div>
          </div>

          {/* Layer 2: Navy Area (Summary) */}
          <div className="bg-[#333C4E] text-white py-8 px-12">
            <div className="flex">
              <div className="w-[220px] shrink-0"></div> {/* Reduced spacer */}
              <div className="pl-12 pr-6"> {/* Reduced internal padding to fill more width */}
                <p className="leading-relaxed text-base font-light opacity-95">
                  {personalInfo.about}
                </p>
              </div>
            </div>
          </div>

          {/* Layer 3: Teal Area (Contact) */}
          <div className="bg-[#4FA1A7] py-4 px-12 text-white">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-2">
              <div className="flex items-center gap-2.5 text-[13px] font-bold whitespace-nowrap">
                <Mail size={16} strokeWidth={3} />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] font-bold whitespace-nowrap">
                <Smartphone size={16} strokeWidth={3} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] font-bold whitespace-nowrap">
                <MapPin size={16} strokeWidth={3} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] font-bold whitespace-nowrap">
                <Instagram size={16} strokeWidth={3} />
                <span>{personalInfo.social}</span>
              </div>
            </div>
          </div>

          {/* Overlapping Profile Photo with Teal Border */}
          <div className="absolute left-10 top-10 z-20">
            <div className="w-64 h-64 rounded-full border-[8px] border-[#4FA1A7] shadow-lg overflow-hidden bg-slate-200">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] px-12 pt-12 pb-16 gap-12">

          {/* Left Column */}
          <div className="space-y-12">

            {/* Work Experience */}
            <motion.section {...fadeIn}>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#333C4E] p-2.5 rounded-full text-white shadow-md">
                  <Briefcase size={22} />
                </div>
                <h2 className="text-2xl font-extrabold text-[#333C4E] tracking-tight uppercase">Work Experience</h2>
              </div>

              <div className="space-y-10">
                {workExperience.map((job, index) => (
                  <div key={index} className="relative pl-2">
                    <h3 className="text-xl font-extrabold text-[#333C4E]">{job.title}</h3>
                    <h4 className="text-lg font-bold text-[#333C4E] mt-0.5">{job.company}</h4>
                    <p className="text-sm font-semibold text-[#4FA1A7] italic mt-1 mb-4">{job.date}</p>
                    
                    <ul className="space-y-3">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                          <span className="text-[#4FA1A7] mt-1.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Workshops & Training */}
            <motion.section {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#333C4E] p-2.5 rounded-full text-white shadow-md">
                  <Award size={22} />
                </div>
                <h2 className="text-2xl font-extrabold text-[#333C4E] tracking-tight uppercase">Workshops & Training Camps</h2>
              </div>

              <div className="space-y-8">
                {workshops.map((workshop, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-extrabold text-[#333C4E]">{workshop.title}</h3>
                    <p className="text-sm font-bold text-slate-800 mt-1">Instructor: {workshop.instructor}</p>
                    <p className="text-xs font-semibold text-[#4FA1A7] mt-1">{workshop.date}</p>
                    <p className="text-xs text-slate-500 mt-1 italic">{workshop.location}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-12 bg-slate-50/50 p-6 rounded-lg">

            {/* Hard Skills */}
            <motion.section {...fadeIn} transition={{ delay: 0.3 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#333C4E] p-2 rounded-full text-white">
                  <Cpu size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#333C4E] uppercase tracking-wider">Hard Skills</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                {hardSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#4FA1A7] rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Soft Skills */}
            <motion.section {...fadeIn} transition={{ delay: 0.4 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#333C4E] p-2 rounded-full text-white">
                  <Lightbulb size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#333C4E] uppercase tracking-wider">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-200 text-slate-600 text-xs font-bold rounded shadow-sm hover:bg-slate-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section {...fadeIn} transition={{ delay: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#333C4E] p-2 rounded-full text-white">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#333C4E] uppercase tracking-wider">Education</h3>
              </div>
              <div className="border-l-2 border-[#4FA1A7] pl-4">
                <h3 className="font-extrabold text-[#333C4E] text-base leading-tight uppercase">{education.degree}</h3>
                <p className="text-slate-800 text-sm mt-1 font-bold">{education.school}</p>
                <p className="text-[#4FA1A7] text-xs mt-1 italic font-semibold">{education.location}</p>
              </div>
            </motion.section>

            {/* Languages */}
            <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#333C4E] p-2 rounded-full text-white">
                  <LangIcon size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#333C4E] uppercase tracking-wider">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <p className="text-sm font-bold text-slate-800">{lang.name}</p>
                    <p className="text-xs text-[#4FA1A7] italic font-medium">{lang.level}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HybridResume;
