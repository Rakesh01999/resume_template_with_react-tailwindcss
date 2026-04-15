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
          {/* Top Layer: Name & Title (White Background) */}
          <div className="pt-12 pb-8 px-12 flex items-center justify-between">
            <div className="w-1/4"></div> {/* Spacer for photo */}
            <div className="w-3/4 pl-12">
              <h1 className="text-6xl font-extrabold text-[#333C4E] tracking-tight">{personalInfo.name}</h1>
              <p className="text-3xl text-resume-teal font-semibold mt-2">{personalInfo.role}</p>
            </div>
          </div>

          {/* Middle Layer: Summary (Navy Background) */}
          <div className="bg-resume-navy text-white py-12 px-12 relative">
            <div className="flex items-center">
              <div className="w-1/4"></div> {/* Spacer for photo */}
              <div className="w-3/4 pl-12 pr-12">
                <p className="leading-relaxed text-lg font-light opacity-95">
                  {personalInfo.about}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Layer: Contact Bar (Teal Background) */}
          <div className="bg-resume-teal py-4 px-12 flex justify-between items-center text-white shadow-inner">
             <div className="w-[15%]"></div> {/* Alignment spacer */}
             <div className="flex-1 flex justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Mail size={18} />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Smartphone size={18} />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin size={18} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Instagram size={18} />
                  <span>{personalInfo.social}</span>
                </div>
             </div>
          </div>

          {/* Overlapping Profile Photo */}
          <div className="absolute left-12 top-[120px] z-10">
            <div className="w-64 h-64 rounded-full border-[10px] border-resume-teal shadow-2xl overflow-hidden bg-slate-200">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] px-12 pb-16 gap-12">

          {/* Left Column */}
          <div className="space-y-12">

            {/* Work Experience */}
            <motion.section {...fadeIn}>
              <div className="resume-section-title">
                <div className="bg-primary-dark p-2 rounded-md text-white">
                  <Briefcase size={20} />
                </div>
                <span>Work Experience</span>
              </div>

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-slate-100">
                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7.5px] top-1.5" />
                    <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">{job.company}</span>
                      <span className="text-xs font-bold text-accent">{job.date}</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-600 leading-relaxed">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Workshops & Training */}
            <motion.section {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="resume-section-title">
                <div className="bg-primary-dark p-2 rounded-md text-white">
                  <Award size={20} />
                </div>
                <span>Workshops & Training Camps</span>
              </div>

              <div className="space-y-6">
                {workshops.map((workshop, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-slate-800">{workshop.title}</h3>
                    <p className="text-sm italic text-slate-600">Instructor: {workshop.instructor}</p>
                    <p className="text-xs font-bold text-accent mt-1">{workshop.date}</p>
                    <p className="text-xs text-slate-400 mt-0.5 italic">{workshop.location}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-12 bg-slate-50/50 p-6 rounded-lg">

            {/* Hard Skills */}
            <motion.section {...fadeIn} transition={{ delay: 0.3 }}>
              <div className="resume-section-title !mb-6">
                <div className="bg-primary-dark p-2 rounded-full text-white">
                  <Cpu size={20} />
                </div>
                <span>Hard Skills</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 font-medium">
                {hardSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Soft Skills */}
            <motion.section {...fadeIn} transition={{ delay: 0.4 }}>
              <div className="resume-section-title !mb-6">
                <div className="bg-primary-dark p-2 rounded-full text-white">
                  <Lightbulb size={20} />
                </div>
                <span>Soft Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-slate-300 text-slate-600 text-xs font-bold rounded shadow-sm hover:bg-slate-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section {...fadeIn} transition={{ delay: 0.5 }}>
              <div className="resume-section-title !mb-6">
                <div className="bg-primary-dark p-2 rounded-full text-white">
                  <GraduationCap size={20} />
                </div>
                <span>Education</span>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-bold text-slate-800 text-sm leading-tight">{education.degree}</h3>
                <p className="text-slate-700 text-xs mt-1">{education.school}</p>
                <p className="text-accent text-[10px] font-bold mt-1 italic uppercase">{education.location}</p>
              </div>
            </motion.section>

            {/* Languages */}
            <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
              <div className="resume-section-title !mb-6">
                <div className="bg-primary-dark p-2 rounded-full text-white">
                  <LangIcon size={20} />
                </div>
                <span>Languages</span>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <p className="text-sm font-bold text-slate-800">{lang.name}</p>
                    <p className="text-xs text-accent italic">{lang.level}</p>
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
