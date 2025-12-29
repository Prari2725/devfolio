import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "PrintMechanix – 3D Printing Manufacturing Platform",
    description: "PrintMechanix is a full-stack web platform that streamlines the 3D printing manufacturing workflow. The application enables users to upload 3D models, select materials, place print orders, and track order status in real time. It includes secure user authentication, integrated payment processing, and complete order history management.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Employee Access Control System",
    description: "An automated, contactless attendance system built using Python-based facial recognition. The system leverages Haar Cascade for face detection and a Tkinter-based interface to record and manage attendance data efficiently in Excel format.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "AI-Driven Gesture-Controlled Image Capture System",
    description: "An AI-powered computer vision application that enables hands-free image capture using gesture recognition. The system supports cloud storage and QR-code-based sharing for instant access to captured images.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "Invoicify – Invoice Management System",
    description: "Invoicify is a full-stack invoice management system designed to streamline customer billing and financial operations. Built using Spring Boot, Hibernate, MySQL, and Docker, it supports secure authentication with JWT, role-based access control, invoice creation, PDF generation, email verification, and two-factor authentication. The platform features a responsive React-based UI and enables activity tracking with exportable reports.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                LEARN MORE →
              </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

