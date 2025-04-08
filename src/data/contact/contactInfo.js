import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const contactInfo = [
  {
    icon: <FaEnvelope className="text-[#2EC4B6] dark:text-[#2EC4B6] text-xl" />,
    title: 'Email',
    content: 'clerelydesign@gmail.com',
    link: 'mailto:clerelydesign@gmail.com'
  },
  {
    icon: <FaPhone className="text-[#2EC4B6] dark:text-[#2EC4B6] text-xl" />,
    title: 'Téléphone',
    content: '+33 7 49 79 63 53',
    link: 'tel:+33749796353'
  },
  {
    icon: <FaMapMarkerAlt className="text-[#2EC4B6] dark:text-[#2EC4B6] text-xl" />,
    title: 'Localisation',
    content: '55 Impasse des Buguets, France',
    link: 'https://maps.google.com/?q=55+Impasse+des+Buguets,France'
  }
]; 