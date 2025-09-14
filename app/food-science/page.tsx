import { Metadata } from "next"
import FooterPagesLayout from "../components/FooterPagesLayout"
import AuthorBox from "../components/AuthorBox"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Food Science - Understanding the Science Behind Nutrition",
  description:
    "Explore the science behind food, nutrition, and calories. Learn about macronutrients, energy metabolism, and the chemistry of cooking.",
  keywords: [
    "food science",
    "nutrition science",
    "calorie chemistry",
    "food composition",
    "metabolism science",
    "macronutrient science",
    "food energy",
    "nutritional biochemistry",
  ],
}

export default function FoodScience() {
  const PUBLISHED = "2024-05-01"
  const UPDATED = "2025-09-14"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Food Science - Understanding the Science Behind Nutrition",
    author: { "@type": "Person", name: "Sadiq" },
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.shredle.co.uk/food-science",
    },
  }
  return (
    <FooterPagesLayout title="Food Science">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-6">
        <div className="text-sm text-gray-600 dark:text-gray-400">By <span className="font-medium">Sadiq</span> • Published {PUBLISHED} • Updated {UPDATED}</div>
        <section>
          <h2 className="text-xl font-bold mb-3 text-orange-700 dark:text-orange-400">
            The Science Behind Food and Nutrition
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Food science explores the complex chemistry, biology, and physics of
            what we eat. Understanding these scientific principles can help us
            make better dietary choices and appreciate how our bodies use the
            foods we consume.
          </p>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            What Is a Calorie?
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              A calorie is technically a unit of energy—specifically, the amount
              of energy needed to raise the temperature of 1 gram of water by 1
              degree Celsius. In nutrition science, we typically use
              kilocalories (kcal), though we commonly refer to them simply as
              &quot;calories.&quot;
            </p>
            <p>
              When scientists determine the calorie content of foods, they
              traditionally use a device called a bomb calorimeter, which
              measures the heat released when food is completely burned.
              However, the human body does not extract energy from food through
              combustion, but through a complex series of digestive and
              metabolic processes.
            </p>
            <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                The Atwater System
              </h4>
              <p className="text-sm">
                The calorie values we use today are generally based on the
                Atwater system, which assigns standard energy values to each
                macronutrient:
              </p>
              <ul className="list-disc pl-5 text-sm mt-2">
                <li>Carbohydrates: 4 calories per gram</li>
                <li>Proteins: 4 calories per gram</li>
                <li>Fats: 9 calories per gram</li>
                <li>Alcohol: 7 calories per gram</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            Biochemistry of Macronutrients
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Carbohydrates: The Body&apos;s Preferred Energy Source
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Carbohydrates are composed of carbon, hydrogen, and oxygen atoms
                arranged in chains of varying complexity. During digestion, they
                are broken down into their simplest form—glucose—which provides
                immediate energy for cellular functions.
              </p>
              <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <h5 className="font-medium text-orange-600 dark:text-orange-400 mb-1">
                  Scientific Insight:
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The brain alone requires about 120 grams of glucose per day,
                  accounting for approximately 60% of the body&apos;s glucose
                  utilization at rest. While the body can use alternative energy
                  sources when carbohydrates are limited, glucose is the
                  preferred fuel for optimal brain function.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Proteins: The Building Blocks
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Proteins are complex molecules made up of amino acids linked by
                peptide bonds. The human body uses proteins primarily for
                structure (building cells and tissues) rather than energy,
                though they can be converted to glucose through a process called
                gluconeogenesis when carbohydrates are scarce.
              </p>
              <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <h5 className="font-medium text-orange-600 dark:text-orange-400 mb-1">
                  The Thermic Effect:
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Proteins have a high thermic effect of food (TEF)—meaning your
                  body uses more energy to digest and process proteins compared
                  to carbohydrates and fats. Approximately 20-30% of the
                  calories in protein are used for digestion and processing,
                  compared to 5-10% for carbohydrates and 0-3% for fats.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                Fats: Concentrated Energy Storage
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Fats (or lipids) are composed of fatty acids and glycerol. They
                provide the most concentrated form of energy at 9 calories per
                gram—more than twice that of proteins and carbohydrates. The
                body efficiently stores excess energy as fat tissue for future
                use.
              </p>
              <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <h5 className="font-medium text-orange-600 dark:text-orange-400 mb-1">
                  Why Fats Have More Calories:
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Fats have more hydrogen atoms relative to their carbon and
                  oxygen content compared to carbohydrates. When metabolized,
                  these additional hydrogen atoms create more energy-storing
                  bonds, yielding more ATP (adenosine triphosphate, the energy
                  currency of cells).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            The Science of Metabolism
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Metabolism encompasses all chemical reactions that occur in the
              body to maintain life. In terms of energy, metabolism consists of
              two primary processes:
            </p>
            <div className="pl-4 space-y-3">
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                  1. Catabolism: Breaking Down for Energy
                </h4>
                <p>
                  In catabolic reactions, complex molecules are broken down into
                  simpler ones, releasing energy in the process. Digestion is a
                  form of catabolism, as is cellular respiration, where glucose
                  is converted to ATP, carbon dioxide, and water.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                  2. Anabolism: Building Up for Growth
                </h4>
                <p>
                  Anabolic reactions require energy to build complex molecules
                  from simpler ones. Examples include protein synthesis
                  (building muscle) and fat storage (converting excess glucose
                  to triglycerides).
                </p>
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg mt-3">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                Basal Metabolic Rate (BMR)
              </h4>
              <p>
                Your BMR represents the calories your body needs to maintain
                basic life functions at rest, accounting for 60-75% of your
                total daily energy expenditure. It&apos;s influenced by factors
                like:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Body size and composition (more muscle increases BMR)</li>
                <li>Age (BMR typically decreases with age)</li>
                <li>Sex (men generally have higher BMRs than women)</li>
                <li>Genetic factors</li>
                <li>Hormonal health (especially thyroid function)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            Food Chemistry: Why Cooking Changes Calories
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Cooking does not just change the taste and texture of food—it
              alters its chemical structure, which can affect its calorie
              content and how efficiently our bodies can extract energy from it.
            </p>

            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                Gelatinization of Starches
              </h4>
              <p>
                When starches are heated in the presence of water, their
                molecular structure changes through a process called
                gelatinization. The tight crystalline structure of raw starch
                granules loosens, making them more accessible to digestive
                enzymes. This is why cooked starches (like rice or potatoes) are
                more easily digested and can provide more available calories
                than their raw counterparts.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                Protein Denaturation
              </h4>
              <p>
                Heat causes proteins to unfold or &quot;denature,&quot; changing
                their three-dimensional structure. This process makes the amino
                acids more accessible to digestive enzymes, potentially
                increasing the amount of protein your body can absorb. This is
                one reason why cooked eggs provide more bioavailable protein
                than raw eggs.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                Resistant Starch Formation
              </h4>
              <p>
                Interestingly, when some cooked starches like pasta, rice, or
                potatoes are cooled after cooking, a portion of the starch
                recrystallizes into &quot;resistant starch.&quot; This form of
                starch resists digestion in the small intestine and acts more
                like fiber, potentially reducing the calories your body can
                extract from these foods.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/70 dark:bg-gray-800/70 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-orange-600 dark:text-orange-400">
            Calorie Availability: Not All Calories Are Absorbed Equally
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              The standard calorie values assigned to foods are averages that do
              not account for individual variations in digestion and absorption.
              Several factors affect how many calories your body actually
              extracts from food:
            </p>

            <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                Food Structure
              </h4>
              <p className="text-sm">
                Whole or minimally processed foods often require more energy to
                digest and may have lower &quot;net&quot; calorie content. For
                example, a study found that whole almonds provided approximately
                20% fewer absorbable calories than their nutritional label
                indicated because some fat remained trapped in the almond&apos;s
                fibrous structure.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                Gut Microbiome
              </h4>
              <p className="text-sm">
                The population of bacteria in your intestines affects how many
                calories you extract from food, particularly from complex
                carbohydrates and fiber. Some gut bacteria break down otherwise
                indigestible fibers, producing short-chain fatty acids that
                provide additional calories.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                Food Particle Size
              </h4>
              <p className="text-sm">
                Smaller food particles have more surface area exposed to
                digestive enzymes. This is why blended or well-chewed foods may
                provide more readily available calories than the same foods in
                larger pieces.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 dark:bg-gray-800/50 p-5 rounded-xl">
          <h3 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">
            Applying Food Science to Healthy Eating
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Understanding the science behind food can help you make more
            informed dietary choices. Here are some practical applications:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-3">
            <li>
              Combine protein with carbohydrates to slow digestion and maintain
              steadier blood sugar levels
            </li>
            <li>
              Chill cooked pasta, potatoes, and rice before eating to increase
              resistant starch content, which may reduce calories and improve
              gut health
            </li>
            <li>
              Consider the thermic effect of food when planning meals—higher
              protein meals require more energy to digest
            </li>
            <li>
              Choose whole foods over processed ones when possible, as their
              complex structure may result in fewer absorbable calories
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            For more practical information on nutrition, explore our{" "}
            <Link
              href="/nutrition-guide"
              className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 underline"
            >
              Nutrition Guide
            </Link>{" "}
            and{" "}
            <Link
              href="/cooking-calories"
              className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 underline"
            >
              Cooking Calories
            </Link>{" "}
            resources.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Playing Shredle regularly can help you develop an intuitive
            understanding of calorie content across different foods, making it
            easier to apply these scientific principles to your daily food
            choices.
          </p>
        </section>

        <div className="text-sm text-gray-600 dark:text-gray-400 italic mt-6">
          <p>
            Note: The information provided is for educational purposes only and
            is not intended as medical or nutritional advice. Consult with a
            healthcare professional for personalized dietary recommendations.
          </p>
        </div>
        <AuthorBox published={PUBLISHED} updated={UPDATED} />
      </div>
    </FooterPagesLayout>
  )
}
