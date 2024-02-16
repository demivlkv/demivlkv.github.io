import { motion } from 'framer-motion';

const animateWorkSection = {
  hidden: { opacity: 0, y: 50 },
  animate: {
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      type: 'tween',
      delayChildren: 0.25,
      staggerChildren: 0.3
    }
  }
};

const WorkItem = ({ year, title, company, company_url, duration, details }) => {
  return (
    <article className="w-full flex flex-col md:flex-row">
      <section className="w-full max-w-[18rem] hidden lg:flex flex-col items-top text-xs md:text-sm">
        <div className="mb-2">
          <span className="inline-block py-1 px-2 mr-2 font-medium text-white dark:text-gray-700 bg-blue-900 dark:bg-rose-200 rounded-md">{year}</span>
          <span className="mr-1 text-base md:text-lg font-medium">{title}</span>
        </div>
        <div className="w-full flex items-center">
          @ 
          <a
            href={company_url}
            target="_blank"
            className="ml-2 text-base md:text-lg font-medium text-emerald-400 dark:text-teal-200 hover:text-gray-300 dark:hover:text-gray-400 transition-all ease-in duration-300 cursor-pointer"
          >
            {company}
          </a>
        </div>

        <p className="mt-3 text-xs sm:text-sm font-normal text-gray-400">
         {duration}
        </p>
      </section>
      <motion.ol
        className="flex flex-col lg:flex-row relative border-l border-gray-300 dark:border-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.li className="mb-10 ml-4"
          variants={animateWorkSection}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute mt-1.5 -left-1.5 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.75 }}
            viewport={{ once: true }}
          />
          <section className="lg:hidden flex flex-col flex-wrap justify-start text-xs md:text-sm">
            <div className="flex flex-row items-center">
              <span className="inline-block py-1 px-2 mr-2 font-medium text-white dark:text-gray-700 bg-blue-900 dark:bg-rose-200 rounded-md">{year}</span>
              <span className="mr-1 text-sm md:text-lg font-medium">{title}</span>
              @ 
              <a
                href={company_url}
                target="_blank"
                className="ml-1 text-sm md:text-lg font-medium text-emerald-400 dark:text-teal-200 hover:text-gray-300 dark:hover:text-gray-400 transition-all ease-in duration-300 cursor-pointer"
              >
                {company}
              </a>
            </div>
            <p className="block lg:hidden my-3 text-xs sm:text-sm font-normal text-gray-400">
              {duration}
            </p>
          </section>

          <p>
            {details()}
          </p>
        </motion.li>
      </motion.ol>
    </article>
  );
};

export default WorkItem;