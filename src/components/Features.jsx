import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordionItem = ({ title, sections, isOpen, onClick }) => (
  <div className="border-b border-gray-300">
    <button
      className="w-full text-left p-4 flex justify-between items-center focus:outline-none bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className={`ml-2 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </button>
    {isOpen && (
      <div className="p-4 bg-gray-50">
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-md font-bold mb-2">{section.contentTitle}</h4>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const Features = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Admin Features',
      sections: [
        {
          contentTitle: 'Admin Capabilities',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        },
        {
          contentTitle: 'Admin Capabilities Extended',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        },
      ],
    },
    {
      title: 'User Features',
      sections: [
        {
          contentTitle: 'User Capabilities',
          content: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
        },
        {
          contentTitle: 'User Capabilities Extended',
          content: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
        },
      ],
    },
    {
      title: 'General Features',
      sections: [
        {
          contentTitle: 'General Capabilities',
          content: 'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        },
      ],
    },
    {
      title: 'Profile Management',
      sections: [
        {
          content: 'Update user profiles, allowing users to modify their personal information, change passwords, and customize settings as needed.',
        },
      ],
    },
    {
      title: 'Password Management',
      sections: [
        {
          contentTitle: 'General Capabilities',
          content: 'Change passwords securely, ensuring that new passwords are hashed and stored safely in our database to protect user privacy and security.',
        },
      ],
    },
    {
      title: 'For Admin Dashboard',
      sections: [
        {
          contentTitle: 'General Capabilities',
          content: 'Provide a summary of user activities, allowing admins to track actions, task updates, and interactions of all users',
        },
        {
          content: 'Filter tasks into "To-Do," "In Progress," or "Completed," allowing admins to manage and oversee all tasks efficiently.',
        }
      ],
    },
    {
      title: 'For User Dashboard',
      sections: [
        {
          content: "View a personal summary of the user's own activities and tasks",
        },
        {
          content: 'Filter tasks into "To-Do," "In Progress," or "Completed," allowing admins to manage and oversee all tasks efficiently.',
        }
      ],
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 my-20">
      <h2 className="text-5xl font-bold mb-12 text-center">Features</h2>
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            sections={item.sections}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;