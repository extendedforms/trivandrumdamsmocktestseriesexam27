// questions.js
// Format: { id, image?, question, options[], answerIndex, correctAnswerText }

window.questions = [
  // ===== Set 1 =====

  {
    id: 1,
    image: "",
    question:
      "A 6-month-old infant develops diarrhea, abdominal distension, and failure to thrive after being started on milk feeds. The pediatrician suspects deficiency of an enzyme required for digestion of a heterodisaccharide composed of glucose and galactose.\nWhich of the following is the correct disaccharide–enzyme pair involved in this condition?",
    options: [
      "Lactose — Lactase",
      "Sucrose — Sucrase",
      "Maltose — Maltase",
      "Trehalose — Trehalase"
    ],
    answerIndex: 0,
    correctAnswerText: "Lactose — Lactase"
  },
  {
    id: 2,
    image: "",
    question:
      "A student is studying carbohydrate stereochemistry. Two sugars are shown to differ only in the configuration around the 2nd carbon atom, while all other chiral centers are identical. One of them is glucose, and the other sugar is its C-2 epimer.\nWhich of the following sugars is the C-2 epimer of glucose?",
    options: [
      "Mannose",
      "Galactose",
      "Fructose",
      "Ribulose"
    ],
    answerIndex: 0,
    correctAnswerText: "Mannose"
  },
  {
    id: 3,
    image: "",
    question:
      "A biochemistry student observes that a freshly prepared glucose solution initially shows a high optical rotation, but after a few hours the optical rotation gradually changes and reaches a constant equilibrium value. This phenomenon occurs due to interconversion between alpha and beta forms of glucose through the open-chain form.\nWhich of the following best describes this phenomenon?",
    options: [
      "Racemization",
      "Mutarotation",
      "Epimerization",
      "Inversion of sugar"
    ],
    answerIndex: 1,
    correctAnswerText: "Mutarotation"
  },
  {
    id: 4,
    image: "",
    question:
      "A patient is advised to take a non-digestible carbohydrate supplement that promotes growth of beneficial gut bacteria. The compound is a fructosan, contains fructose units, and is also used clinically for glomerular filtration rate calculation because it is freely filtered and not reabsorbed.\nWhich of the following carbohydrates is being described?",
    options: [
      "Starch",
      "Inulin",
      "Dextran",
      "Chitin"
    ],
    answerIndex: 1,
    correctAnswerText: "Inulin"
  },
  {
    id: 5,
    image: "",
    question:
      "A 2-year-old boy presents with coarse facial features, hepatosplenomegaly, skeletal abnormalities, developmental delay, and corneal clouding. Urine examination shows increased excretion of dermatan sulfate and heparan sulfate. Enzyme assay reveals deficiency of a lysosomal enzyme involved in degradation of glycosaminoglycans.\nWhich of the following enzyme deficiencies is most likely responsible for this condition?",
    options: [
      "Iduronate sulfatase",
      "Galactosamine-6-sulfatase",
      "Alpha-L-iduronidase",
      "Beta-glucuronidase"
    ],
    answerIndex: 2,
    correctAnswerText: "Alpha-L-iduronidase"
  },
  {
    id: 6,
    image: "",
    question:
      "A 52-year-old man with type 2 diabetes mellitus is started on dapagliflozin. After treatment, his blood glucose improves, but urine glucose excretion increases. The drug acts by blocking a sodium-dependent glucose transporter responsible for renal reabsorption of glucose.\nWhich of the following transporters is inhibited by this drug?",
    options: [
      "GLUT-4",
      "GLUT-2",
      "SGLT-2",
      "GLUT-5"
    ],
    answerIndex: 2,
    correctAnswerText: "SGLT-2"
  },
  {
    id: 7,
    image: "",
    question:
      "A 24-year-old sprinter develops severe muscle fatigue during intense exercise. In his exercising skeletal muscle, oxygen availability becomes limited and pyruvate is converted to lactate by lactate dehydrogenase. This helps regenerate NAD⁺ so that glycolysis can continue.\nWhat is the net ATP gain per glucose molecule in anaerobic glycolysis from glucose to lactate?",
    options: [
      "7 ATP",
      "5 ATP",
      "0 ATP",
      "2 ATP"
    ],
    answerIndex: 3,
    correctAnswerText: "2 ATP"
  },
  {
    id: 8,
    image: "",
    question:
      "A patient with chronic hypoxia shows increased formation of 2,3-bisphosphoglycerate in red blood cells. This molecule decreases hemoglobin affinity for oxygen and helps oxygen unloading in tissues. During this shunt, one ATP-generating step of glycolysis is bypassed.\nWhat is the net ATP gain in RBC when glycolysis proceeds through the Rapoport–Luebering cycle?",
    options: [
      "7 ATP",
      "5 ATP",
      "2 ATP",
      "0 ATP"
    ],
    answerIndex: 3,
    correctAnswerText: "0 ATP"
  },
  {
    id: 9,
    image: "",
    question:
      "A laboratory technician receives multiple blood samples from the emergency department. One sample is collected in a gray-top tube for estimation of blood glucose in a suspected diabetic emergency. The additive in this tube prevents glycolysis in the collected blood sample and preserves glucose concentration.\nWhich of the following is the correct additive present in the gray-top tube?",
    options: [
      "Sodium fluoride + Potassium oxalate",
      "Sodium citrate",
      "EDTA K₂",
      "Lithium heparin"
    ],
    answerIndex: 0,
    correctAnswerText: "Sodium fluoride + Potassium oxalate"
  },
  {
    id: 10,
    image: "",
    question:
      "A chronic alcoholic patient is brought to the emergency department with global confusion, ophthalmoplegia, and ataxia. The physician suspects Wernicke-Korsakoff syndrome and administers thiamine before giving intravenous dextrose. Thiamine is required as a coenzyme for oxidative decarboxylation of pyruvate to acetyl-CoA.\nWhich of the following is the correct coenzyme required for pyruvate dehydrogenase complex?",
    options: [
      "Thiamine pyrophosphate",
      "Biotin",
      "Pyridoxal phosphate",
      "Tetrahydrofolate"
    ],
    answerIndex: 0,
    correctAnswerText: "Thiamine pyrophosphate"
  },
  {
    id: 11,
    image: "",
    question:
      "A 36-year-old fasting patient maintains blood glucose levels by synthesizing glucose from non-carbohydrate precursors. In hepatocytes, pyruvate is first converted to oxaloacetate in mitochondria, and then oxaloacetate is converted to phosphoenolpyruvate during gluconeogenesis.\nWhich of the following is the key enzyme that converts oxaloacetate to phosphoenolpyruvate?",
    options: [
      "Pyruvate carboxylase",
      "Phosphoenolpyruvate carboxykinase",
      "Fructose-1,6-bisphosphatase",
      "Glucose-6-phosphatase"
    ],
    answerIndex: 1,
    correctAnswerText: "Phosphoenolpyruvate carboxykinase"
  },
  {
    id: 12,
    image: "",
    question:
      "A patient with severe thiamine deficiency has impaired oxidation of acetyl-CoA. The physician explains that acetyl-CoA normally enters a mitochondrial pathway that completely oxidizes carbon skeletons of carbohydrates, fatty acids, ketone bodies, and amino acids to carbon dioxide and water under aerobic conditions.\nWhich of the following statements regarding the TCA cycle is correct?",
    options: [
      "It occurs mainly in red blood cells",
      "It is an amphibolic pathway occurring in the mitochondrial matrix",
      "It is active in anaerobic conditions",
      "It converts glucose directly into lactate"
    ],
    answerIndex: 1,
    correctAnswerText: "It is an amphibolic pathway occurring in the mitochondrial matrix"
  },
  {
    id: 13,
    image: "",
    question:
      "A patient with accidental exposure to a toxic compound develops inhibition of the TCA cycle. The toxic compound forms fluorocitrate, which blocks conversion of citrate to isocitrate by inhibiting an iron-containing enzyme of the TCA cycle.\nWhich of the following enzymes is inhibited in this condition?",
    options: [
      "Citrate synthase",
      "Isocitrate dehydrogenase",
      "Aconitase",
      "Succinate dehydrogenase"
    ],
    answerIndex: 2,
    correctAnswerText: "Aconitase"
  },
  {
    id: 14,
    image: "",
    question:
      "A 10-year-old child is being evaluated for disorders of glycogen metabolism. The examiner asks about the key difference between glycogen storage in liver and skeletal muscle. Liver glycogen helps maintain blood glucose during fasting, whereas muscle glycogen is mainly used for local energy during exercise.\nWhich of the following statements regarding glycogen is correct?",
    options: [
      "Glycogen is a polymer of fructose units",
      "Glycogen has only alpha-1,6 linkages",
      "Liver glycogen is depleted after 12–14 hours of fasting",
      "Muscle glycogen is significantly affected by prolonged fasting"
    ],
    answerIndex: 2,
    correctAnswerText: "Liver glycogen is depleted after 12–14 hours of fasting"
  },
  {
    id: 15,
    image: "",
    question:
      "A child with suspected glycogen metabolism disorder is evaluated biochemically. The examiner explains that during glycogen synthesis, glucose residues are added mainly through α-1,4 glycosidic bonds, while branch points are created by transferring a small chain of glucose residues to form α-1,6 linkages.\nWhich of the following enzymes is responsible for formation of α-1,6 branch points in glycogen?",
    options: [
      "Glycogen phosphorylase",
      "Glycogen synthase",
      "Glucose-6-phosphatase",
      "Branching enzyme"
    ],
    answerIndex: 3,
    correctAnswerText: "Branching enzyme"
  },
  {
    id: 16,
    image: "",
    question:
      "A child presents with severe fasting hypoglycemia, lactic acidosis, ketosis, hyperlipidemia, and hyperuricemia. Liver biopsy shows excess glycogen accumulation. The deficient enzyme normally converts glucose-6-phosphate to free glucose in the liver endoplasmic reticulum.\nWhich of the following glycogen storage diseases is most likely present?",
    options: [
      "Pompe disease",
      "Cori disease",
      "McArdle disease",
      "Von Gierke disease"
    ],
    answerIndex: 3,
    correctAnswerText: "Von Gierke disease"
  },
  {
    id: 17,
    image: "",
    question:
      "A 6-year-old boy develops sudden pallor, jaundice, and dark urine after taking an oxidant drug. Peripheral smear shows features of hemolysis. The physician explains that red blood cells are highly dependent on a cytosolic pathway that produces NADPH, which keeps glutathione in reduced form and protects RBC membrane from oxidative damage.\nWhich of the following pathways is most important in preventing hemolysis in this child?",
    options: [
      "Pentose phosphate pathway",
      "Glycolysis",
      "Uronic acid pathway",
      "Gluconeogenesis"
    ],
    answerIndex: 0,
    correctAnswerText: "Pentose phosphate pathway"
  },
  {
    id: 18,
    image: "",
    question:
      "A neonate develops unconjugated hyperbilirubinemia. The physician explains that bilirubin becomes water soluble after conjugation in the liver by an enzyme using UDP-glucuronic acid. This glucuronidation reaction is also important for detoxification of many drugs and steroid hormones.\nWhich of the following is the most important significance of the uronic acid pathway?",
    options: [
      "Formation of UDP-glucuronic acid for conjugation reactions",
      "Formation of acetyl-CoA for TCA cycle",
      "Production of ATP by substrate-level phosphorylation",
      "Formation of 2,3-bisphosphoglycerate in RBCs"
    ],
    answerIndex: 0,
    correctAnswerText: "Formation of UDP-glucuronic acid for conjugation reactions"
  },
  {
    id: 19,
    image: "",
    question:
      "A 7-month-old infant develops vomiting, jaundice, hypoglycemia, hepatomegaly, and acute liver dysfunction after fruit juice is introduced during weaning. The symptoms improve after removing fructose and sucrose from the diet. The disorder is due to accumulation of fructose-1-phosphate in liver and kidney.\nWhich of the following enzyme deficiencies is responsible for this condition?",
    options: [
      "Fructokinase",
      "Aldolase B",
      "Aldolase A",
      "Sorbitol dehydrogenase"
    ],
    answerIndex: 1,
    correctAnswerText: "Aldolase B"
  },
  {
    id: 20,
    image: "",
    question:
      "A nutrition researcher explains that humans cannot synthesize certain polyunsaturated fatty acids because humans cannot introduce double bonds beyond carbon-9. One of these fatty acids is the most essential fatty acid, is an omega-6 fatty acid, and is a precursor for arachidonic acid and eicosanoid synthesis.\nWhich of the following fatty acids best fits this description?",
    options: [
      "Oleic acid",
      "Linoleic acid",
      "Stearic acid",
      "Palmitic acid"
    ],
    answerIndex: 1,
    correctAnswerText: "Linoleic acid"
  },
  {
    id: 21,
    image: "",
    question:
      "A patient with Barth syndrome presents with cardiomyopathy, skeletal myopathy, and growth delay. Biochemical analysis shows abnormal remodeling of a major phospholipid present in the inner mitochondrial membrane. The defective gene is TAZ, which encodes tafazzin.\nWhich of the following phospholipids is most characteristically involved?",
    options: [
      "Phosphatidylcholine",
      "Phosphatidylserine",
      "Cardiolipin",
      "Phosphatidylinositol"
    ],
    answerIndex: 2,
    correctAnswerText: "Cardiolipin"
  },
  {
    id: 22,
    image: "",
    question:
      "A 1-year-old child presents with progressive neurodegeneration, exaggerated startle response, blindness, and a cherry-red spot on the macula. There is no hepatosplenomegaly. Enzyme assay shows deficiency of an enzyme required for degradation of GM₂ ganglioside.\nWhich of the following enzyme deficiencies is most likely responsible?",
    options: [
      "Sphingomyelinase",
      "Beta-glucosidase",
      "Hexosaminidase A",
      "Alpha-galactosidase A"
    ],
    answerIndex: 2,
    correctAnswerText: "Hexosaminidase A"
  },
  {
    id: 23,
    image: "",
    question:
      "A 32-year-old well-fed patient with high carbohydrate intake shows increased hepatic lipogenesis. In the cytosol, acetyl-CoA is converted to malonyl-CoA by a rate-limiting enzyme requiring ATP, biotin, CO₂, Mn²⁺, and HCO₃⁻. This step is essential for de novo fatty acid synthesis.\nWhich of the following enzymes catalyzes this rate-limiting step?",
    options: [
      "Fatty acid synthase",
      "Citrate lyase",
      "Malic enzyme",
      "Acetyl-CoA carboxylase"
    ],
    answerIndex: 3,
    correctAnswerText: "Acetyl-CoA carboxylase"
  },
  {
    id: 24,
    image: "",
    question:
      "A newborn presents with hypoketotic hypoglycemia during fasting. Biochemical evaluation shows defective transport of long-chain fatty acids into mitochondria. The physician explains that long-chain fatty acids require a shuttle system derived from lysine and methionine, mainly synthesized in liver and kidney, to cross the inner mitochondrial membrane for β-oxidation.\nWhich of the following molecules is required for transport of long-chain fatty acids into mitochondria?",
    options: [
      "Citrate",
      "Malonyl-CoA",
      "Biotin",
      "Carnitine"
    ],
    answerIndex: 3,
    correctAnswerText: "Carnitine"
  },
  {
    id: 25,
    image: "",
    question:
      "A student is calculating ATP yield from complete β-oxidation of palmitic acid. Each cycle of β-oxidation produces 1 FADH₂ and 1 NADH, and the acetyl-CoA produced enters the TCA cycle. Palmitic acid has 16 carbon atoms.\nWhat is the net ATP yield from complete oxidation of palmitic acid?",
    options: [
      "106 ATP",
      "108 ATP",
      "120 ATP",
      "129 ATP"
    ],
    answerIndex: 0,
    correctAnswerText: "106 ATP"
  },
  {
    id: 26,
    image: "",
    question:
      "A child presents with recurrent episodes of hypoketotic hypoglycemia, vomiting, and lethargy during fasting. Laboratory evaluation shows impaired β-oxidation of medium-chain fatty acids and increased dicarboxylic acids in urine due to ω-oxidation. Another patient has methylmalonic aciduria with neurological involvement due to impaired conversion of methylmalonyl-CoA to succinyl-CoA.\nWhich of the following statements is correct regarding fatty acid oxidation disorders?",
    options: [
      "MCAD deficiency causes hypoketotic hypoglycemia and dicarboxylic aciduria",
      "Carnitine deficiency mainly causes hyperketotic hypoglycemia without muscle symptoms",
      "Odd-chain fatty acids cannot contribute to glucose formation",
      "Propionyl-CoA carboxylase deficiency is treated by avoiding biotin completely"
    ],
    answerIndex: 0,
    correctAnswerText: "MCAD deficiency causes hypoketotic hypoglycemia and dicarboxylic aciduria"
  },
  {
    id: 27,
    image: "",
    question:
      "A 6-year-old child presents with progressive neurological deterioration, hepatomegaly, renal dysfunction, and accumulation of very long-chain fatty acids. The physician explains that oxidation of very long-chain fatty acids normally occurs in peroxisomes, and a defect in this organelle can cause a cerebro-hepato-renal syndrome.\nWhich of the following disorders is classically associated with defective peroxisomal oxidation of very long-chain fatty acids?",
    options: [
      "Refsum disease",
      "Zellweger syndrome",
      "MCAD deficiency",
      "Carnitine deficiency"
    ],
    answerIndex: 1,
    correctAnswerText: "Zellweger syndrome"
  },
  {
    id: 28,
    image: "",
    question:
      "A 45-year-old fasting patient has increased hepatic production of ketone bodies. These ketone bodies are released into blood and used by extrahepatic tissues such as heart and skeletal muscle. However, the liver cannot utilize the ketone bodies it produces because it lacks a key enzyme required for ketolysis.\nWhich of the following enzymes is absent in the liver, preventing hepatic utilization of ketone bodies?",
    options: [
      "HMG-CoA synthase",
      "Thiophorase / CoA transferase",
      "HMG-CoA lyase",
      "Beta-hydroxybutyrate dehydrogenase"
    ],
    answerIndex: 1,
    correctAnswerText: "Thiophorase / CoA transferase"
  },
  {
    id: 29,
    image: "",
    question:
      "A 30-year-old man is on prolonged fasting for several days. Initially, his brain mainly depends on glucose, but with continued starvation, ketone bodies rise and begin to supply energy to the brain. This helps reduce breakdown of body proteins for gluconeogenesis.\nWhich of the following best explains this metabolic adaptation during prolonged starvation?",
    options: [
      "RBC starts using ketone bodies as major fuel",
      "Liver starts utilizing ketone bodies for its own energy",
      "Brain begins using ketone bodies, causing protein-sparing effect",
      "Heart stops using fatty acids and depends only on glucose"
    ],
    answerIndex: 2,
    correctAnswerText: "Brain begins using ketone bodies, causing protein-sparing effect"
  },
  {
    id: 30,
    image: "",
    question:
      "A 55-year-old man with hypercholesterolemia is started on a drug that inhibits the rate-limiting step of cholesterol biosynthesis. This drug decreases conversion of HMG-CoA to mevalonate in the cytosol, thereby reducing hepatic cholesterol synthesis.\nWhich of the following enzymes is inhibited by this drug?",
    options: [
      "HMG-CoA synthase",
      "Acetyl-CoA carboxylase",
      "HMG-CoA reductase",
      "Thiophorase"
    ],
    answerIndex: 2,
    correctAnswerText: "HMG-CoA reductase"
  },
  {
    id: 31,
    image: "",
    question:
      "A 48-year-old patient with fat malabsorption is found to have defective bile acid availability. The physician explains that cholesterol is converted into bile acids in the liver, and the classic pathway begins with hydroxylation at the 7-alpha position. These bile acids are then conjugated with glycine or taurine and help in digestion of dietary lipids.\nWhich of the following is the rate-limiting enzyme of bile acid synthesis from cholesterol?",
    options: [
      "HMG-CoA reductase",
      "Acetyl-CoA carboxylase",
      "Lecithin cholesterol acyltransferase",
      "7-alpha hydroxylase"
    ],
    answerIndex: 3,
    correctAnswerText: "7-alpha hydroxylase"
  },
  {
    id: 32,
    image: "",
    question:
      "A patient’s fasting lipid profile is being interpreted. The examiner explains that lipoproteins differ in lipid and protein content. One lipoprotein is synthesized in the intestine, has the highest lipid content, lowest protein content, largest diameter, and remains near the origin during electrophoresis.\nWhich of the following lipoproteins best fits this description?",
    options: [
      "HDL",
      "LDL",
      "VLDL",
      "Chylomicron"
    ],
    answerIndex: 3,
    correctAnswerText: "Chylomicron"
  },
  {
    id: 33,
    image: "",
    question:
      "A patient with abnormal lipid transport is being evaluated. The physician explains that lipoproteins have a polar outer shell containing phospholipids, free cholesterol, and apolipoproteins, while the non-polar hydrophobic core contains triacylglycerol and cholesteryl esters. One apolipoprotein acts as an activator of lipoprotein lipase, which helps in hydrolysis of triglycerides from chylomicrons and VLDL.\nWhich of the following apolipoproteins activates lipoprotein lipase?",
    options: [
      "Apo C-II",
      "Apo A-I",
      "Apo B-100",
      "Apo E"
    ],
    answerIndex: 0,
    correctAnswerText: "Apo C-II"
  },
  {
    id: 34,
    image: "",
    question:
      "A 46-year-old patient with increased atherosclerotic risk has elevated LDL cholesterol. The clinician explains that oxidized LDL is taken up by macrophages, forming foam cells, which contribute to fatty streaks, plaques, thrombus formation, and embolic complications. LDL cholesterol is estimated using a formula only when serum triglycerides are below 400 mg/dL.\nWhich of the following is the correct Friedewald equation for calculating LDL cholesterol?",
    options: [
      "LDL = Total cholesterol − HDL − Triglycerides/5",
      "LDL = Total cholesterol + HDL − Triglycerides/5",
      "LDL = HDL + VLDL − Total cholesterol",
      "LDL = Triglycerides/5 − HDL"
    ],
    answerIndex: 0,
    correctAnswerText: "LDL = Total cholesterol − HDL − Triglycerides/5"
  },
  {
    id: 35,
    image: "",
    question:
      "A 42-year-old patient is being evaluated for low HDL levels and increased cardiovascular risk. The physician explains that HDL removes excess cholesterol from peripheral tissues and esterifies it with the help of an enzyme activated by Apo A-I. This enzyme converts free cholesterol into cholesteryl ester during reverse cholesterol transport.\nWhich of the following enzymes is activated by Apo A-I?",
    options: [
      "Lipoprotein lipase",
      "LCAT",
      "Hormone-sensitive lipase",
      "HMG-CoA reductase"
    ],
    answerIndex: 1,
    correctAnswerText: "LCAT"
  },
  {
    id: 36,
    image: "",
    question:
      "A chronic alcoholic patient presents with hypoglycemia and lactic acidosis after prolonged alcohol intake. Biochemical evaluation shows increased hepatic NADH/NAD⁺ ratio due to oxidation of ethanol to acetaldehyde and then acetate. This increased NADH shifts pyruvate toward lactate and oxaloacetate toward malate.\nWhich of the following metabolic consequences is most likely due to excess NADH in alcohol metabolism?",
    options: [
      "Increased gluconeogenesis",
      "Lactic acidosis with hypoglycemia",
      "Decreased beta-hydroxybutyrate formation",
      "Increased oxaloacetate availability for gluconeogenesis"
    ],
    answerIndex: 1,
    correctAnswerText: "Lactic acidosis with hypoglycemia"
  },
  {
    id: 37,
    image: "",
    question:
      "A researcher is studying the structural features of amino acids present in mammalian proteins. One amino acid is found to be optically inactive because its side chain is hydrogen, making it achiral and symmetrical. It is also the simplest amino acid.\nWhich of the following amino acids is described above?",
    options: [
      "Alanine",
      "Valine",
      "Glycine",
      "Isoleucine"
    ],
    answerIndex: 2,
    correctAnswerText: "Glycine"
  },
  {
    id: 38,
    image: "",
    question:
      "A 24-year-old student is studying amino acids involved in methylation reactions. One sulfur-containing amino acid forms S-adenosyl methionine, which acts as an important methyl group donor in several biochemical reactions.\nWhich of the following amino acids is the precursor of S-adenosyl methionine?",
    options: [
      "Cysteine",
      "Serine",
      "Methionine",
      "Tyrosine"
    ],
    answerIndex: 2,
    correctAnswerText: "Methionine"
  },
  {
    id: 39,
    image: "",
    question:
      "A child with suspected selenium deficiency develops cardiomyopathy. The physician explains that selenium is incorporated into proteins as selenocysteine, which is encoded by a special codon and is important for enzymes such as glutathione peroxidase and iodothyronine deiodinase.\nWhich of the following statements about selenocysteine is correct?",
    options: [
      "It is encoded by UAA codon",
      "It is structurally similar to methionine",
      "It is encoded by UGA codon and is an analog of cysteine",
      "It is mainly involved in collagen hydroxylation"
    ],
    answerIndex: 2,
    correctAnswerText: "It is encoded by UGA codon and is an analog of cysteine"
  },
  {
    id: 40,
    image: "",
    question:
      "A 28-year-old athlete performs prolonged exercise. His skeletal muscle transfers amino nitrogen to pyruvate, forming alanine. Alanine travels to the liver, where it is converted back to pyruvate and used for gluconeogenesis. This cycle helps transport nitrogen safely from muscle to liver.\nWhich of the following best describes this cycle?",
    options: [
      "Cori cycle",
      "Urea cycle",
      "Glucose-alanine cycle / Cahill cycle",
      "Carnitine shuttle"
    ],
    answerIndex: 2,
    correctAnswerText: "Glucose-alanine cycle / Cahill cycle"
  },
  {
    id: 41,
    image: "",
    question:
      "A 45-year-old chronic alcoholic patient is evaluated for liver injury. His liver function test shows markedly raised AST compared to ALT. The physician explains that aminotransferases require vitamin B₆ and transfer amino groups without releasing free ammonia.\nWhich of the following statements about transamination is correct?",
    options: [
      "It releases free ammonia directly",
      "It is an irreversible reaction",
      "It does not require pyridoxal phosphate",
      "It transfers amino group from amino acid to alpha-keto acid"
    ],
    answerIndex: 3,
    correctAnswerText: "It transfers amino group from amino acid to alpha-keto acid"
  },
  {
    id: 42,
    image: "",
    question:
      "A patient with hyperammonemia is being evaluated. The physician explains that ammonia is transported safely in blood mainly as glutamine, which is non-toxic. In the liver, ammonia enters the urea cycle. The first step of the urea cycle occurs in mitochondria and requires N-acetylglutamate as a positive allosteric activator.\nWhich of the following enzymes catalyzes the first committed mitochondrial step of the urea cycle?",
    options: [
      "Arginase",
      "Argininosuccinate lyase",
      "Ornithine transcarbamoylase",
      "Carbamoyl phosphate synthetase I"
    ],
    answerIndex: 3,
    correctAnswerText: "Carbamoyl phosphate synthetase I"
  },
  {
    id: 43,
    image: "",
    question:
      "A neonate develops poor feeding, vomiting, lethargy, seizures, and severe hyperammonemia within the first few days of life. Urine analysis shows orotic aciduria. Enzyme assay reveals deficiency of the most common urea cycle enzyme disorder, inherited in an X-linked recessive pattern.\nWhich of the following enzyme deficiencies is most likely responsible?",
    options: [
      "Ornithine transcarbamoylase deficiency",
      "Argininosuccinate synthetase deficiency",
      "Argininosuccinate lyase deficiency",
      "Arginase deficiency"
    ],
    answerIndex: 0,
    correctAnswerText: "Ornithine transcarbamoylase deficiency"
  },
  {
    id: 44,
    image: "",
    question:
      "A neonate presents with lethargy, seizures, hypotonia, and developmental delay. Plasma and cerebrospinal fluid show markedly elevated glycine levels. The defect involves impaired degradation of glycine by a mitochondrial multienzyme complex that normally converts glycine into CO₂, NH₄⁺, methylene-THF, and THF.\nWhich of the following disorders is most likely present?",
    options: [
      "Non-ketotic hyperglycinemia",
      "Phenylketonuria",
      "Maple syrup urine disease",
      "Homocystinuria"
    ],
    answerIndex: 0,
    correctAnswerText: "Non-ketotic hyperglycinemia"
  },
  {
    id: 45,
    image: "",
    question:
      "A 6-year-old child presents with developmental delay, tall stature, ectopia lentis, and thromboembolic tendency. Biochemical evaluation shows increased homocysteine levels. The physician explains that methionine metabolism involves S-adenosyl methionine, methyl-B₁₂, and transsulfuration pathway.\nWhich of the following features is classically associated with homocystinuria?",
    options: [
      "Cataract with sorbitol accumulation",
      "Ectopia lentis with thromboembolism",
      "Cherry-red spot without hepatosplenomegaly",
      "Hypoketotic hypoglycemia during fasting"
    ],
    answerIndex: 1,
    correctAnswerText: "Ectopia lentis with thromboembolism"
  },
  {
    id: 46,
    image: "",
    question:
      "A newborn screening test shows elevated phenylalanine. The infant later develops intellectual disability, seizures, fair skin, and musty/mousy odor if untreated. The disorder is due to impaired conversion of phenylalanine to tyrosine. The first-line treatment is dietary restriction of phenylalanine with tyrosine supplementation.\nWhich of the following enzyme deficiencies is most commonly responsible for this disorder?",
    options: [
      "Tyrosinase deficiency",
      "Phenylalanine hydroxylase deficiency",
      "Homogentisate oxidase deficiency",
      "Cystathionine beta-synthase deficiency"
    ],
    answerIndex: 1,
    correctAnswerText: "Phenylalanine hydroxylase deficiency"
  },
  {
    id: 47,
    image: "",
    question:
      "A child presents with darkening of urine on standing and later develops black pigmentation of cartilage with arthritis-like symptoms. Biochemical evaluation shows accumulation of homogentisic acid, which gets oxidized to benzoquinone acetate.\nWhich of the following enzyme deficiencies is responsible for this condition?",
    options: [
      "Phenylalanine hydroxylase",
      "Tyrosinase",
      "Homogentisate oxidase",
      "Fumarylacetoacetate hydrolase"
    ],
    answerIndex: 2,
    correctAnswerText: "Homogentisate oxidase"
  },
  {
    id: 48,
    image: "",
    question:
      "A patient with episodic headache, sweating, palpitations, and hypertension is suspected to have pheochromocytoma. Urinary testing shows increased catecholamine metabolites. The physician explains that norepinephrine and epinephrine are metabolized by COMT and MAO to form a final urinary metabolite.\nWhich of the following is the major metabolite measured in urine for this condition?",
    options: [
      "Homovanillic acid",
      "5-hydroxyindoleacetic acid",
      "Vanillylmandelic acid",
      "Xanthurenic acid"
    ],
    answerIndex: 2,
    correctAnswerText: "Vanillylmandelic acid"
  },
  {
    id: 49,
    image: "",
    question:
      "A newborn is normal at birth but after a few days develops poor feeding, vomiting, lethargy, delayed milestones, and opisthotonus. The urine has a characteristic sweetish odor. Biochemical testing shows accumulation of branched-chain amino acids and their ketoacids due to defective oxidative decarboxylation.\nWhich of the following enzyme complexes is deficient in this condition?",
    options: [
      "Phenylalanine hydroxylase",
      "Histidase",
      "Tyrosine aminotransferase",
      "Branched-chain alpha-ketoacid dehydrogenase"
    ],
    answerIndex: 3,
    correctAnswerText: "Branched-chain alpha-ketoacid dehydrogenase"
  },
  {
    id: 50,
    image: "",
    question:
      "A patient is evaluated for folate deficiency. After giving a histidine load, there is increased urinary excretion of formiminoglutamate. Another patient with an aminoaciduria has urine with a sweaty feet odor, suggesting isovaleric acidemia. The physician explains that several amino acid disorders have characteristic odors.\nWhich of the following aminoaciduria–odor pairs is correctly matched?",
    options: [
      "Phenylketonuria — Boiled cabbage odor",
      "Maple syrup urine disease — Ammoniacal odor",
      "Tyrosinemia type I — Mousy odor",
      "Isovaleric acidemia — Sweaty feet odor"
    ],
    answerIndex: 3,
    correctAnswerText: "Isovaleric acidemia — Sweaty feet odor"
  },
  {
    id: 51,
    image: "",
    question:
      "A patient with impaired amino acid catabolism is being evaluated for defective replenishment of tricarboxylic acid cycle intermediates. The physician explains that some amino acids enter the cycle as oxaloacetate, alpha-ketoglutarate, fumarate, succinyl-CoA, or pyruvate. One amino acid directly replenishes oxaloacetate.\nWhich of the following amino acids is directly converted to oxaloacetate?",
    options: [
      "Aspartate",
      "Leucine",
      "Lysine",
      "Phenylalanine"
    ],
    answerIndex: 0,
    correctAnswerText: "Aspartate"
  },
  {
    id: 52,
    image: "",
    question:
      "A malnourished elderly patient is admitted after major surgery. The physician explains that amino acid balance depends on dietary protein intake, endogenous protein breakdown, protein synthesis, and amino acid degradation. Another student asks about gastric protein digestion and proteasomal degradation of intracellular proteins.\nWhich of the following statements is correct?",
    options: [
      "Pepsinogen is activated to pepsin by gastric H⁺ and autocatalysis",
      "Pepsin is most active at alkaline pH",
      "Ubiquitin-mediated protein degradation does not require ATP",
      "Protein denaturation destroys the primary amino acid sequence"
    ],
    answerIndex: 0,
    correctAnswerText: "Pepsinogen is activated to pepsin by gastric H⁺ and autocatalysis"
  },
  {
    id: 53,
    image: "",
    question:
      "A medical student is classifying enzymes based on their reaction type. One enzyme uses molecular oxygen as an electron acceptor but does not incorporate oxygen into the substrate. Another enzyme directly incorporates oxygen into the substrate. The student also learns that some enzymes are RNA-based rather than protein-based.\nWhich of the following enzyme classes uses oxygen as an electron acceptor without incorporating it into the substrate?",
    options: [
      "Oxygenase",
      "Oxidase",
      "Hydrolase",
      "Ligase"
    ],
    answerIndex: 1,
    correctAnswerText: "Oxidase"
  },
  {
    id: 54,
    image: "",
    question:
      "A patient with chronic diarrhea, dermatitis, alopecia, and poor wound healing is suspected to have zinc deficiency. The physician explains that several enzymes require zinc as a metal cofactor. In enzyme structure, the complete functional enzyme consists of a protein part and a non-protein component.\nWhich of the following zinc-dependent enzymes is correctly matched?",
    options: [
      "Superoxide dismutase",
      "Carbonic anhydrase",
      "Xanthine oxidase",
      "Tyrosinase"
    ],
    answerIndex: 1,
    correctAnswerText: "Carbonic anhydrase"
  },
  {
    id: 55,
    image: "",
    question:
      "A researcher studies an enzyme-catalyzed reaction by gradually increasing the substrate concentration while keeping enzyme concentration constant. Initially, the reaction velocity rises rapidly, but later it reaches a plateau due to enzyme saturation. At a substrate concentration equal to Km, the reaction velocity is found to be half of the maximum velocity.\nWhich of the following statements is most accurate regarding Km?",
    options: [
      "Km is directly proportional to enzyme affinity",
      "Km is equal to Vmax",
      "Km is the substrate concentration at which velocity is half of Vmax",
      "Km represents the y-intercept of Lineweaver–Burk plot"
    ],
    answerIndex: 2,
    correctAnswerText: "Km is the substrate concentration at which velocity is half of Vmax"
  },
  {
    id: 56,
    image: "",
    question:
      "An enzyme kinetic study is plotted as 1/V₀ versus 1/[S]. The graph is a straight line. The slope is calculated as Km/Vmax, the y-intercept is 1/Vmax, and the x-intercept is negative.\nWhich of the following correctly represents the x-intercept of a Lineweaver–Burk plot?",
    options: [
      "1/Vmax",
      "Km/Vmax",
      "−1/Km",
      "Vmax/Km"
    ],
    answerIndex: 2,
    correctAnswerText: "−1/Km"
  },
  {
    id: 57,
    image: "",
    question:
      "A patient is given a drug that competes with the natural substrate for the active site of an enzyme. On Lineweaver–Burk plot, the slope increases, the x-intercept shifts towards zero, but the y-intercept remains unchanged.\nWhich of the following changes is most likely produced by this inhibitor?",
    options: [
      "Decreased Km with decreased Vmax",
      "Same Km with decreased Vmax",
      "Decreased Km with same Vmax",
      "Increased Km with same Vmax"
    ],
    answerIndex: 3,
    correctAnswerText: "Increased Km with same Vmax"
  },
  {
    id: 58,
    image: "",
    question:
      "A 58-year-old man presents with severe chest pain radiating to the left arm. Serum enzyme analysis shows raised creatine kinase-MB and an altered lactate dehydrogenase isoenzyme pattern, where LDH-1 becomes greater than LDH-2.\nWhich of the following statements is most appropriate?",
    options: [
      "LDH-5 is predominantly found in heart",
      "Acid phosphatase is used mainly for pancreatic disease",
      "Alanine aminotransferase is primarily a marker of myocardial infarction",
      "LDH-1 greater than LDH-2 is a flipped pattern seen in myocardial infarction"
    ],
    answerIndex: 3,
    correctAnswerText: "LDH-1 greater than LDH-2 is a flipped pattern seen in myocardial infarction"
  },
  {
    id: 59,
    image: "",
    question:
      "A researcher is studying subcellular fractions of hepatocytes. One fraction shows high activity of glucose-6-phosphatase, active cytochrome P450–dependent oxidation of xenobiotics, and participation in protein and lipid biosynthesis.\nWhich organelle is most likely represented by this fraction?",
    options: [
      "Endoplasmic reticulum",
      "Lysosome",
      "Peroxisome",
      "Mitochondria"
    ],
    answerIndex: 0,
    correctAnswerText: "Endoplasmic reticulum"
  },
  {
    id: 60,
    image: "",
    question:
      "A 32-year-old woman presents with recurrent episodes of severe abdominal pain, anxiety, confusion, and neuropsychiatric symptoms. There are no prominent bullous skin lesions. A defect in the heme biosynthetic pathway is suspected, and intravenous glucose is started.\nWhich enzyme deficiency is most classically associated with this condition?",
    options: [
      "Ferrochelatase",
      "Porphobilinogen deaminase",
      "Uroporphyrinogen decarboxylase",
      "Coproporphyrinogen oxidase"
    ],
    answerIndex: 1,
    correctAnswerText: "Porphobilinogen deaminase"
},
  {
    id: 61,
    image: "",
    question:
      "A newborn develops unconjugated hyperbilirubinemia. On evaluation, bilirubin is found to be produced from heme breakdown, transported to the liver bound to albumin, and later conjugated with glucuronic acid before being secreted into bile.\nWhich enzyme is responsible for conjugation of bilirubin in the liver?",
    options: [
      "Heme oxygenase",
      "Biliverdin reductase",
      "UDP-glucuronyl transferase",
      "Cytochrome P450 reductase"
    ],
    answerIndex: 2,
    correctAnswerText: "UDP-glucuronyl transferase"
  },
  {
    id: 62,
    image: "",
    question:
      "A mountaineer staying at high altitude for several weeks develops physiological adaptation with increased erythrocyte count, increased hemoglobin concentration, and increased 2,3-BPG level. His hemoglobin shows cooperative oxygen binding and a sigmoid oxygen dissociation curve.\nWhich of the following statements is most appropriate regarding hemoglobin?",
    options: [
      "Adult hemoglobin mainly contains α₂δ₂ chains",
      "Myoglobin shows cooperative binding with sigmoid curve",
      "Sickle cell hemoglobin is due to replacement of valine by glutamate",
      "Adult hemoglobin mainly contains α₂β₂ chains and binds oxygen cooperatively"
    ],
    answerIndex: 3,
    correctAnswerText:
      "Adult hemoglobin mainly contains α₂β₂ chains and binds oxygen cooperatively"
  },
  {
    id: 63,
    image: "",
    question:
      "A patient with suspected mitochondrial toxicity is being evaluated. The electron transport chain enzyme complexes are located in the inner mitochondrial membrane. Electrons from NADH enter through Complex I and are transferred to coenzyme Q, while electrons from succinate enter through Complex II.\nWhich of the following is the correct enzyme complex for entry of electrons from NADH into the electron transport chain?",
    options: [
      "NADH–Coenzyme Q oxidoreductase",
      "Succinate–Coenzyme Q reductase",
      "Cytochrome c oxidase",
      "ATP synthase"
    ],
    answerIndex: 0,
    correctAnswerText: "NADH–Coenzyme Q oxidoreductase"
  },
  {
    id: 64,
    image: "",
    question:
      "A researcher studies oxidative phosphorylation in isolated mitochondria. Electron transfer from NADH and FADH₂ to oxygen generates a proton gradient across the inner mitochondrial membrane. Protons return to the matrix through ATP synthase, leading to ATP formation.\nWhich of the following statements is correct regarding ATP yield in oxidative phosphorylation?",
    options: [
      "NADH produces 1.5 ATP and FADH₂ produces 2.5 ATP",
      "NADH produces 2.5 ATP and FADH₂ produces 1.5 ATP",
      "Both NADH and FADH₂ produce 2.5 ATP each",
      "FADH₂ produces more ATP than NADH"
    ],
    answerIndex: 1,
    correctAnswerText: "NADH produces 2.5 ATP and FADH₂ produces 1.5 ATP"
  },
  {
    id: 65,
    image: "",
    question:
      "A child is brought to emergency after accidental ingestion of a chemical used as a pesticide. He develops hyperthermia, excessive sweating, tachypnea, and marked increase in oxygen consumption. ATP production is reduced despite an active electron transport chain.\nWhich of the following best explains the mechanism of this compound?",
    options: [
      "Inhibition of Complex I electron transfer",
      "Blockade of ATP synthase proton channel",
      "Dissociation of oxidation from phosphorylation",
      "Inhibition of cytochrome oxidase by blocking oxygen reduction"
    ],
    answerIndex: 2,
    correctAnswerText: "Dissociation of oxidation from phosphorylation"
  },
  {
    id: 66,
    image: "",
    question:
      "A researcher compares two tissues. In skeletal muscle and brain, cytosolic NADH electrons enter the electron transport chain through a shuttle that transfers electrons to FAD and finally to Complex II. In heart and liver, another shuttle transfers electrons as mitochondrial NADH and yields higher ATP.\nWhich of the following correctly matches the shuttle system with ATP yield?",
    options: [
      "Glycerol-3-phosphate shuttle — 2.5 ATP",
      "Malate-aspartate shuttle — 1.5 ATP",
      "Both shuttles produce equal ATP",
      "Glycerol-3-phosphate shuttle — 1.5 ATP; Malate-aspartate shuttle — 2.5 ATP"
    ],
    answerIndex: 3,
    correctAnswerText:
      "Glycerol-3-phosphate shuttle — 1.5 ATP; Malate-aspartate shuttle — 2.5 ATP"
  },
  {
    id: 67,
    image: "",
    question:
      "A child presents with difficulty seeing in dim light. Biochemical evaluation shows defective regeneration of the visual pigment in photoreceptors. In the normal visual cycle, light converts the retinal component of rhodopsin into which of the following forms?",
    options: [
      "All-trans-retinal",
      "11-cis-retinal",
      "Retinoic acid",
      "Retinol"
    ],
    answerIndex: 0,
    correctAnswerText: "All-trans-retinal"
  },
  {
    id: 68,
    image: "",
    question:
      "A 4-year-old child with chronic malnutrition develops night blindness, dry conjunctiva, and triangular foamy lesions on the conjunctiva. Another pregnant woman is advised to avoid high-dose retinoid therapy because of teratogenic risk.\nWhich of the following is the confirmatory ocular sign of vitamin A deficiency?",
    options: [
      "Night blindness",
      "Bitot’s spot",
      "Corneal xerosis",
      "Corneal scar"
    ],
    answerIndex: 1,
    correctAnswerText: "Bitot’s spot"
  },
  {
    id: 69,
    image: "",
    question:
      "A premature infant develops hemolytic anemia with increased sensitivity of red blood cell membranes to peroxide-induced injury. The child is suspected to have deficiency of a fat-soluble vitamin that acts as the most potent natural antioxidant and prevents lipid peroxidation.\nWhich of the following is the most important function of this vitamin?",
    options: [
      "Gamma-carboxylation of clotting factors",
      "Formation of visual pigment rhodopsin",
      "Prevention of lipid peroxidation",
      "Oxidative decarboxylation of alpha-keto acids"
    ],
    answerIndex: 2,
    correctAnswerText: "Prevention of lipid peroxidation"
  },
  {
    id: 70,
    image: "",
    question:
      "A newborn develops bleeding tendency with prolonged prothrombin time. Biochemical analysis shows defective post-translational modification of clotting factors II, VII, IX and X. Another patient with chronic alcoholism develops peripheral neuropathy and Wernicke-like symptoms due to deficiency of a vitamin required for pyruvate dehydrogenase.\nWhich of the following statements is correct?",
    options: [
      "Vitamin K deficiency primarily decreases rhodopsin regeneration",
      "Vitamin B1 deficiency causes defective gamma-carboxylation of clotting factors",
      "Vitamin E is required for activation of clotting factors II, VII, IX and X",
      "Vitamin K is required for gamma-carboxylation of glutamate residues in clotting factors"
    ],
    answerIndex: 3,
    correctAnswerText:
      "Vitamin K is required for gamma-carboxylation of glutamate residues in clotting factors"
  },
  {
    id: 71,
    image: "",
    question:
      "A patient presents with sore throat, angular stomatitis, cheilosis, seborrheic dermatitis, magenta tongue and photophobia. Examination also shows corneal vascularization. Deficiency of a vitamin whose active forms act as prosthetic groups for succinate dehydrogenase, acyl-CoA dehydrogenase, glycerol-3-phosphate dehydrogenase and glutathione reductase is suspected.\nWhich of the following is the correct active form of the deficient vitamin?",
    options: [
      "Flavin adenine dinucleotide and flavin mononucleotide",
      "Nicotinamide adenine dinucleotide and nicotinamide adenine dinucleotide phosphate",
      "Pyridoxal phosphate",
      "Thiamine pyrophosphate"
    ],
    answerIndex: 0,
    correctAnswerText: "Flavin adenine dinucleotide and flavin mononucleotide"
  },
  {
    id: 72,
    image: "",
    question:
      "A patient with chronic diarrhea, dermatitis over sun-exposed areas, dementia and glossitis is diagnosed with pellagra. History reveals intake of maize-based diet and long-term anti-tubercular therapy. Another patient taking the same drug develops convulsions, dermatitis, cheilosis and peripheral neuropathy.\nWhich of the following vitamins is classically deficient in the second patient?",
    options: [
      "Niacin",
      "Pyridoxine",
      "Riboflavin",
      "Pantothenic acid"
    ],
    answerIndex: 1,
    correctAnswerText: "Pyridoxine"
  },
  {
    id: 73,
    image: "",
    question:
      "A 28-year-old man is evaluated in a metabolic laboratory after an overnight fast. His oxygen consumption and carbon dioxide production are measured at complete physical and mental rest in a reclining position under normal temperature and humidity. The test is used to calculate basal metabolic rate and respiratory quotient.\nWhich of the following dietary substrates has the highest caloric value per gram?",
    options: [
      "Protein",
      "Carbohydrate",
      "Fat",
      "Alcohol"
    ],
    answerIndex: 2,
    correctAnswerText: "Fat"
  },
  {
    id: 74,
    image: "",
    question:
      "A 3-year-old boy presents with developmental delay, hyperuricemia and repeated biting of lips and fingers. Genetic analysis reveals an X-linked recessive defect in an enzyme involved in the purine salvage pathway. This enzyme normally converts hypoxanthine to inosine monophosphate and guanine to guanosine monophosphate using phosphoribosyl pyrophosphate.\nWhich of the following enzymes is deficient in this child?",
    options: [
      "Adenine phosphoribosyltransferase",
      "Ribonucleotide reductase",
      "Thymidylate synthase",
      "Hypoxanthine-guanine phosphoribosyltransferase"
    ],
    answerIndex: 3,
    correctAnswerText: "Hypoxanthine-guanine phosphoribosyltransferase"
  },
  {
    id: 75,
    image: "",
    question:
      "A 6-month-old boy presents with recurrent severe bacterial, viral and fungal infections. Flow cytometry shows marked reduction of both B cells and T cells. Enzyme assay reveals deficiency of an enzyme involved in purine metabolism, leading to accumulation of toxic deoxyadenosine metabolites in lymphocytes.\nWhich of the following enzyme deficiencies best explains this condition?",
    options: [
      "Adenosine deaminase",
      "Hypoxanthine-guanine phosphoribosyltransferase",
      "Adenine phosphoribosyltransferase",
      "Xanthine oxidase"
    ],
    answerIndex: 0,
    correctAnswerText: "Adenosine deaminase"
  },
  {
    id: 76,
    image: "",
    question:
      "A child presents with megaloblastic anemia, growth retardation and excess urinary orotic acid. Serum ammonia level is normal. The defective enzyme complex normally converts orotate to uridine monophosphate during pyrimidine biosynthesis.\nWhich of the following enzyme complexes is deficient in this disorder?",
    options: [
      "Carbamoyl phosphate synthetase II",
      "Uridine monophosphate synthase",
      "Dihydroorotate dehydrogenase",
      "Ribonucleotide reductase"
    ],
    answerIndex: 1,
    correctAnswerText: "Uridine monophosphate synthase"
  },
  {
    id: 77,
    image: "",
    question:
      "A researcher is studying a double-stranded DNA sample. The DNA has adenine 23%, thymine 23%, cytosine 27% and guanine 27%. On heating, the strands separate at a particular temperature, and absorbance at 260 nm increases.\nWhich of the following statements is most appropriate regarding this DNA sample?",
    options: [
      "Adenine pairs with guanine by three hydrogen bonds",
      "The coding strand is complementary to messenger RNA",
      "Higher guanine-cytosine content increases melting temperature",
      "Organic solvents increase the melting temperature of DNA"
    ],
    answerIndex: 2,
    correctAnswerText: "Higher guanine-cytosine content increases melting temperature"
  },
  {
    id: 78,
    image: "",
    question:
      "A cell in S phase is actively replicating its DNA. At the replication fork, one strand is synthesized continuously, while the other is synthesized discontinuously as multiple short fragments. The DNA is also packed around basic proteins to form nucleosomes.\nWhich of the following statements is correct?",
    options: [
      "DNA polymerase adds nucleotides to the 5’ phosphate end",
      "Lagging strand is synthesized continuously",
      "Heterochromatin is transcriptionally active",
      "DNA polymerase adds nucleotides only to the free 3’-OH end"
    ],
    answerIndex: 3,
    correctAnswerText: "DNA polymerase adds nucleotides only to the free 3’-OH end"
  },
  {
    id: 79,
    image: "",
    question:
      "A molecular biology laboratory is using a bacterial DNA polymerase fragment for DNA labeling and sequencing experiments. This fragment has DNA polymerase activity and 3’ → 5’ exonuclease proofreading activity, but lacks 5’ → 3’ exonuclease activity.\nWhich of the following is the enzyme fragment being used?",
    options: [
      "Klenow fragment of DNA polymerase I",
      "DNA polymerase III holoenzyme",
      "DNA polymerase γ",
      "DNA polymerase α"
    ],
    answerIndex: 0,
    correctAnswerText: "Klenow fragment of DNA polymerase I"
  },
  {
    id: 80,
    image: "",
    question:
      "A patient with recurrent optic neuropathy is suspected to have a mitochondrial DNA disorder. Genetic analysis reveals a maternally inherited mutation. In another experiment, a cancer cell line shows high telomerase activity, allowing continuous cell division.\nWhich of the following statements is correct?",
    options: [
      "Telomerase shortens telomeres in germ cells and stem cells",
      "Mitochondrial DNA shows maternal inheritance and has a higher mutation rate than nuclear DNA",
      "Topoisomerase I cuts both DNA strands and requires ATP",
      "Mitochondrial DNA is linear and contains many introns"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Mitochondrial DNA shows maternal inheritance and has a higher mutation rate than nuclear DNA"
  },
  {
    id: 81,
    image: "",
    question:
      "A child presents with extreme photosensitivity, freckling over sun-exposed areas, and early-onset skin malignancies. Molecular testing shows defective removal of UV-induced pyrimidine dimers from DNA.\nWhich of the following DNA repair mechanisms is most likely defective?",
    options: [
      "Mismatch repair",
      "Base excision repair",
      "Nucleotide excision repair",
      "Non-homologous end joining"
    ],
    answerIndex: 2,
    correctAnswerText: "Nucleotide excision repair"
  },
  {
    id: 82,
    image: "",
    question:
      "A eukaryotic gene is transcribed into hnRNA containing both introns and exons. Before translation, the transcript undergoes processing with addition of a special nucleotide cap at the 5’ end, removal of introns, and addition of a polyadenylated tail at the 3’ end.\nWhich of the following correctly represents the 5’ cap added during post-transcriptional modification?",
    options: [
      "Polyadenylate tail",
      "Uracil-rich splice site",
      "Cytosine methyl cap",
      "7-methyl guanosine cap"
    ],
    answerIndex: 3,
    correctAnswerText: "7-methyl guanosine cap"
  },
  {
    id: 83,
    image: "",
    question:
      "A researcher is studying protein synthesis and observes that an amino acid is attached to the 3’ end of its specific transfer RNA. This reaction uses ATP and produces AMP + PPi. The enzyme involved also has high fidelity to prevent wrong amino acid incorporation.\nWhich of the following enzymes catalyzes this reaction?",
    options: [
      "Aminoacyl-tRNA synthetase",
      "Peptidyl transferase",
      "RNA polymerase II",
      "DNA ligase"
    ],
    answerIndex: 0,
    correctAnswerText: "Aminoacyl-tRNA synthetase"
  },
  {
    id: 84,
    image: "",
    question:
      "A molecular biology experiment is studying eukaryotic transcription. A mutation affects the enzyme responsible for synthesizing messenger RNA, heterogeneous nuclear RNA, micro RNA, small nuclear RNA and long non-coding RNA. Another observation shows that the promoter contains a TATA box around −25 to −35 bp and requires TFIID for basal transcription complex formation.\nWhich of the following RNA polymerases is primarily involved?",
    options: [
      "RNA polymerase I",
      "RNA polymerase II",
      "RNA polymerase III",
      "Mitochondrial RNA polymerase"
    ],
    answerIndex: 1,
    correctAnswerText: "RNA polymerase II"
  },
  {
    id: 85,
    image: "",
    question:
      "A DNA coding strand has the sequence 5’–AATTCCGGATC–3’. During transcription, the messenger RNA formed has the same sequence as the coding strand except that uracil replaces thymine.\nWhich of the following messenger RNA sequences will be produced?",
    options: [
      "5’–TTAAGGCCTAG–3’",
      "3’–AAUUCCGGAUC–5’",
      "5’–AAUUCCGGAUC–3’",
      "5’–GACUCCGGAAU–3’"
    ],
    answerIndex: 2,
    correctAnswerText: "5’–AAUUCCGGAUC–3’"
  },
  {
    id: 86,
    image: "",
    question:
      "A bacterial cell is grown in a medium containing lactose but no glucose. The lac repressor is inactive, cyclic AMP level is high, and catabolite activator protein binds near the lac promoter, causing enhanced transcription of structural genes Z, Y and A.\nWhich of the following correctly represents the product of the lac Z gene?",
    options: [
      "Permease",
      "Transacetylase",
      "Lac repressor",
      "β-galactosidase"
    ],
    answerIndex: 3,
    correctAnswerText: "β-galactosidase"
  },
  {
    id: 87,
    image: "",
    question:
      "A researcher studies a tumor suppressor gene that is transcriptionally inactive in a cancer cell. Analysis shows methylation at CpG islands near the promoter region. Another gene in the same cell becomes transcriptionally active after modification of histone lysine residues by histone acetylase.\nWhich of the following statements best explains these findings?",
    options: [
      "DNA methylation causes heterochromatin formation, while histone acetylation causes euchromatin formation",
      "DNA methylation activates transcription, while histone acetylation causes gene silencing",
      "DNA methylation occurs mainly at adenine residues in eukaryotes",
      "Histone acetylation is mainly responsible for genomic imprinting and mismatch repair"
    ],
    answerIndex: 0,
    correctAnswerText:
      "DNA methylation causes heterochromatin formation, while histone acetylation causes euchromatin formation"
  },
  {
    id: 88,
    image: "",
    question:
      "A forensic laboratory receives a small amount of double-stranded DNA from a crime scene. The sample is first amplified, then cut using restriction endonucleases, separated by gel electrophoresis, transferred by blotting, and finally analyzed to identify the individual.\nWhich of the following correctly represents the technique described?",
    options: [
      "Southern blotting alone",
      "Restriction Fragment Length Polymorphism–based DNA fingerprinting",
      "Western blotting",
      "Northern blotting"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Restriction Fragment Length Polymorphism–based DNA fingerprinting"
  },
  {
    id: 89,
    image: "",
    question:
      "A neonate is suspected to have a latent viral infection. A molecular test is performed using target DNA, primers, nucleotides, and a heat-stable DNA polymerase obtained from Thermus aquaticus. The amplified DNA is later analyzed using a blotting method.\nWhich of the following correctly matches the blotting technique with the molecule detected?",
    options: [
      "Northern blot — Protein",
      "Western blot — DNA",
      "Southern blot — DNA",
      "Southwestern blot — RNA"
    ],
    answerIndex: 2,
    correctAnswerText: "Southern blot — DNA"
  },
  {
    id: 90,
    image: "",
    question:
      "A scientist wants to edit a defective gene in cultured cells using a system that uses an RNA guide to direct an endonuclease to a specific DNA sequence. In another experiment, a recombinase system derived from bacteriophage P1 is used to cause inversion, deletion, or translocation of DNA segments.\nWhich of the following is the RNA-guided endonuclease system used for genome editing?",
    options: [
      "CRE-Lox system",
      "Flow cytometry",
      "Fluorescence in situ hybridization",
      "CRISPR-Cas9 system"
    ],
    answerIndex: 3,
    correctAnswerText: "CRISPR-Cas9 system"
  },
  {
    id: 91,
    image: "",
    question:
      "A 52-year-old obese man is planned for elective laparoscopic cholecystectomy under general anesthesia. During pre-operative assessment, he is found to have BMI 34 kg/m², thick beard, history of snoring, and absent teeth. The anesthetist anticipates difficulty mainly during which step of general anesthesia?",
    options: [
      "Intravenous induction",
      "Bag and mask ventilation",
      "Neuromuscular reversal",
      "Extubation"
    ],
    answerIndex: 1,
    correctAnswerText: "Bag and mask ventilation"
  },
  {
    id: 92,
    image: "",
    question:
      "A 45-year-old woman is posted for thyroid surgery. During airway assessment, she is asked to sit upright, open her mouth widely, protrude her tongue, and avoid phonation. Only the base of the uvula is visible, while the pillars are not seen. Which Mallampati class is this?",
    options: [
      "Class I",
      "Class II",
      "Class III",
      "Class IV"
    ],
    answerIndex: 2,
    correctAnswerText: "Class III"
  },
  {
    id: 93,
    image: "",
    question:
      "A 48-year-old man is undergoing direct laryngoscopy for endotracheal intubation. On laryngoscopic view, no glottic structure is visible. Neither epiglottis, vocal cords, nor posterior commissure can be seen. According to Cormack–Lehane classification, which grade is this?",
    options: [
      "Grade I",
      "Grade II",
      "Grade III",
      "Grade IV"
    ],
    answerIndex: 3,
    correctAnswerText: "Grade IV"
  },
  {
    id: 94,
    image: "",
    question:
      "A 58-year-old obese woman with large breasts is posted for surgery under general anesthesia. During preparation for intubation, pillows are placed under her head, neck, and shoulders so that the external auditory meatus lies in line with the suprasternal notch. Which position is being used?",
    options: [
      "HELP / RAMP position",
      "Trendelenburg position",
      "Lithotomy position",
      "Prone position"
    ],
    answerIndex: 0,
    correctAnswerText: "HELP / RAMP position"
  },
  {
    id: 95,
    image: "",
    question:
      "A 35-year-old singer is posted for a short elective surgical procedure. The anesthetist wants to avoid endotracheal intubation, reduce laryngeal trauma, and provide hands-free ventilation. A supraglottic airway device is selected. Which of the following is the best advantage of laryngeal mask airway over endotracheal tube?",
    options: [
      "Completely prevents aspiration",
      "No need of muscle relaxation",
      "Useful in emergency surgery with full stomach",
      "Best device in distorted upper airway anatomy"
    ],
    answerIndex: 1,
    correctAnswerText: "No need of muscle relaxation"
  },
  {
    id: 96,
    image: "",
    question:
      "A patient with anticipated difficult airway is planned for surgery. The anesthetist decides to secure the airway before induction using the gold standard technique. Which of the following is the preferred method?",
    options: [
      "Blind nasotracheal intubation",
      "LMA insertion after induction",
      "Awake fiberoptic bronchoscopy guided intubation",
      "Emergency cricothyroidotomy"
    ],
    answerIndex: 2,
    correctAnswerText: "Awake fiberoptic bronchoscopy guided intubation"
  },
  {
    id: 97,
    image: "",
    question:
      "A 40-year-old patient is intubated for general anesthesia. After insertion of the endotracheal tube, the anesthetist wants to confirm that the tube is in the trachea and not in the esophagus. Which of the following is the gold standard method for confirmation of endotracheal tube placement?",
    options: [
      "Bilateral chest rise",
      "Auscultation of breath sounds",
      "Fogging inside the tube",
      "Fiberoptic bronchoscopy"
    ],
    answerIndex: 3,
    correctAnswerText: "Fiberoptic bronchoscopy"
  },
  {
    id: 98,
    image: "",
    question:
      "A 65-year-old man with controlled hypertension is planned for elective surgery. He is functionally active and has no limitation of daily activity. During pre-operative assessment, he is classified according to ASA physical status. Which class is most appropriate?",
    options: [
      "ASA II",
      "ASA III",
      "ASA IV",
      "ASA V"
    ],
    answerIndex: 0,
    correctAnswerText: "ASA II"
  },
  {
    id: 99,
    image: "",
    question:
      "A 62-year-old man with coronary artery disease is planned for elective surgery. He is on clopidogrel after previous percutaneous coronary intervention. During pre-operative preparation, the anesthetist advises stopping clopidogrel before surgery. What is the usual recommended duration for stopping clopidogrel before elective surgery?",
    options: [
      "3–5 days",
      "7 days",
      "12–24 hours",
      "4–8 weeks"
    ],
    answerIndex: 1,
    correctAnswerText: "7 days"
  },
  {
    id: 100,
    image: "",
    question:
      "A 30-year-old anxious woman is taken to the operating room for elective surgery. Before induction, she is given 100% oxygen while breathing spontaneously for 3 minutes. The anesthetist explains that this maneuver replaces alveolar nitrogen with oxygen and increases safe apnea time. Which technique is being performed?",
    options: [
      "Capnography",
      "Controlled hypotension",
      "Preoxygenation / Denitrogenation",
      "Bispectral index monitoring"
    ],
    answerIndex: 2,
    correctAnswerText: "Preoxygenation / Denitrogenation"
},
  {
    id: 101,
    image: "",
    question:
      "A 28-year-old woman under general anesthesia has normal oxygen saturation on pulse oximetry initially. After intravenous administration of methylene blue dye, the pulse oximeter suddenly shows a marked fall in saturation, but the patient is clinically stable and arterial oxygenation is normal. Which factor is responsible for the maximum false low pulse oximeter reading?",
    options: [
      "Dark skin",
      "Bilirubin",
      "Carbon monoxide poisoning",
      "Methylene blue"
    ],
    answerIndex: 3,
    correctAnswerText: "Methylene blue"
  },
  {
    id: 102,
    image: "",
    question:
      "During anesthesia, capnography shows a gradually rising end-tidal carbon dioxide value above 45 mmHg with a waveform that is not touching the baseline. The anesthetist suspects rebreathing. Which of the following is the most likely cause?",
    options: [
      "Exhausted carbon dioxide absorber",
      "Pulmonary embolism",
      "Esophageal intubation",
      "Hyperventilation"
    ],
    answerIndex: 0,
    correctAnswerText: "Exhausted carbon dioxide absorber"
  },
  {
    id: 103,
    image: "",
    question:
      "A 24-year-old woman is posted for a short procedure requiring rapid loss of consciousness. The anesthetist chooses an intravenous induction agent that is a barbiturate, acts through gamma-aminobutyric acid-A receptor agonism, has ultrafast onset, but is avoided in acute intermittent porphyria. Which drug is being described?",
    options: [
      "Ketamine",
      "Thiopentone",
      "Sevoflurane",
      "Midazolam"
    ],
    answerIndex: 1,
    correctAnswerText: "Thiopentone"
  },
  {
    id: 104,
    image: "",
    question:
      "A 10-year-old child with bronchial asthma and hypotension is taken for emergency wound debridement. The anesthetist selects an induction agent that preserves respiration, causes bronchodilation, provides analgesia, and produces dissociative anesthesia. Which of the following is the most likely drug?",
    options: [
      "Propofol",
      "Thiopentone",
      "Ketamine",
      "Etomidate"
    ],
    answerIndex: 2,
    correctAnswerText: "Ketamine"
  },
  {
    id: 105,
    image: "",
    question:
      "A 7-year-old child with bronchial asthma and painful burn wounds is posted for burn dressing under anesthesia. The child is mildly hypotensive, and the anesthetist wants an induction agent that provides analgesia, bronchodilation, and preserves airway reflexes. Which drug is most appropriate?",
    options: [
      "Thiopentone",
      "Propofol",
      "Etomidate",
      "Ketamine"
    ],
    answerIndex: 3,
    correctAnswerText: "Ketamine"
  },
  {
    id: 106,
    image: "",
    question:
      "A 68-year-old man with severe ischemic heart disease and aortic aneurysm is planned for emergency surgery. The anesthetist wants an induction agent that is cardio-stable with minimal change in cardiac output, blood pressure, and heart rate. Which drug is preferred?",
    options: [
      "Etomidate",
      "Propofol",
      "Thiopentone",
      "Ketamine"
    ],
    answerIndex: 0,
    correctAnswerText: "Etomidate"
  },
  {
    id: 107,
    image: "",
    question:
      "A 45-year-old man is undergoing general anesthesia. After induction and bag–mask ventilation, a muscle relaxant is administered to make laryngoscopy easier and provide surgical immobility. Which of the following best describes the mechanism of action of non-depolarizing muscle relaxants?",
    options: [
      "Complete agonist at nicotinic acetylcholine receptor",
      "Competitive antagonist at nicotinic acetylcholine receptor",
      "Partial agonist at nicotinic acetylcholine receptor",
      "Inhibition of acetylcholinesterase enzyme"
    ],
    answerIndex: 1,
    correctAnswerText: "Competitive antagonist at nicotinic acetylcholine receptor"
  },
  {
    id: 108,
    image: "",
    question:
      "A trauma patient with full stomach is planned for rapid sequence intubation. The anesthetist chooses succinylcholine because it has the fastest onset and shortest duration among neuromuscular blockers. Which enzyme metabolizes succinylcholine?",
    options: [
      "Acetylcholinesterase",
      "Hepatic microsomal enzymes",
      "Plasma cholinesterase",
      "Monoamine oxidase"
    ],
    answerIndex: 2,
    correctAnswerText: "Plasma cholinesterase"
  },
  {
    id: 109,
    image: "",
    question:
      "A 55-year-old patient with renal failure is planned for surgery under general anesthesia. The anesthetist wants to use a non-depolarizing muscle relaxant that is safe in both renal and hepatic failure because it undergoes organ-independent Hofmann elimination. Which of the following drugs is most appropriate?",
    options: [
      "Pancuronium",
      "Vecuronium",
      "Rocuronium",
      "Cisatracurium"
    ],
    answerIndex: 3,
    correctAnswerText: "Cisatracurium"
  },
  {
    id: 110,
    image: "",
    question:
      "A 40-year-old man receives rocuronium during surgery. At the end of the procedure, rapid and specific reversal of neuromuscular blockade is required. Which drug is most appropriate?",
    options: [
      "Sugammadex",
      "Neostigmine",
      "Edrophonium",
      "Atropine"
    ],
    answerIndex: 0,
    correctAnswerText: "Sugammadex"
  },
  {
    id: 111,
    image: "",
    question:
      "A 42-year-old patient receives a non-depolarizing muscle relaxant during surgery. At the end of surgery, neuromuscular monitoring is done using train-of-four stimulation. The fourth twitch is compared with the first twitch, and the ratio is found to be more than 0.9. What is the best interpretation?",
    options: [
      "Intense neuromuscular block",
      "Safe for extubation",
      "Need immediate post-tetanic count",
      "Indicates Phase II block only"
    ],
    answerIndex: 1,
    correctAnswerText: "Safe for extubation"
  },
  {
    id: 112,
    image: "",
    question:
      "A patient under general anesthesia has profound neuromuscular blockade. Train-of-four count is zero. The anesthetist gives tetanic stimulation for 5 seconds, waits for 3 seconds, and then applies single twitch stimulation. No twitch is seen. What does post-tetanic count of zero indicate?",
    options: [
      "Mild residual block",
      "Adequate recovery for extubation",
      "Intense neuromuscular block",
      "Normal neuromuscular transmission"
    ],
    answerIndex: 2,
    correctAnswerText: "Intense neuromuscular block"
  },
  {
    id: 113,
    image: "",
    question:
      "A 28-year-old patient is receiving inhalational anesthesia. The anesthetist explains that an agent with low blood–gas partition coefficient has poor solubility in blood and therefore produces faster induction and faster recovery. Which of the following inhalational agents has the fastest onset?",
    options: [
      "Sevoflurane",
      "Desflurane",
      "Nitrous oxide",
      "Xenon"
    ],
    answerIndex: 3,
    correctAnswerText: "Xenon"
  },
  {
    id: 114,
    image: "",
    question:
      "A 70-year-old man is undergoing surgery under inhalational anesthesia. The anesthetist notes that elderly age decreases the minimum alveolar concentration requirement, while young age increases it. At what age is MAC maximum?",
    options: [
      "6 months of age",
      "6 years of age",
      "18 years of age",
      "70 years of age"
    ],
    answerIndex: 0,
    correctAnswerText: "6 months of age"
  },
  {
    id: 115,
    image: "",
    question:
      "A 32-year-old woman is receiving oxygen, nitrous oxide, and a volatile anesthetic during induction. The anesthetist explains that rapid uptake of nitrous oxide from alveoli concentrates the simultaneously administered volatile agent, causing faster induction. Which phenomenon is being described?",
    options: [
      "Diffusion hypoxia",
      "Second gas effect",
      "Concentration effect",
      "Meyer–Overton effect"
    ],
    answerIndex: 1,
    correctAnswerText: "Second gas effect"
  },
  {
    id: 116,
    image: "",
    question:
      "A patient receives nitrous oxide during maintenance of anesthesia. During recovery, nitrous oxide rapidly diffuses from blood into alveoli, diluting alveolar oxygen and carbon dioxide. Which complication can occur if 100% oxygen is not given before the end of anesthesia?",
    options: [
      "Malignant hyperthermia",
      "Halothane hepatitis",
      "Diffusion hypoxia",
      "Rebreathing of carbon dioxide"
    ],
    answerIndex: 2,
    correctAnswerText: "Diffusion hypoxia"
  },
  {
    id: 117,
    image: "",
    question:
      "A 6-year-old child is planned for inhalational induction of anesthesia. The anesthetist chooses a sweet-smelling volatile agent that is considered the agent of choice for inhalational induction, especially in pediatric patients. Which of the following is the most appropriate agent?",
    options: [
      "Halothane",
      "Isoflurane",
      "Desflurane",
      "Sevoflurane"
    ],
    answerIndex: 3,
    correctAnswerText: "Sevoflurane"
  },
  {
    id: 118,
    image: "",
    question:
      "A patient is connected to an anesthesia machine. Oxygen and nitrous oxide from cylinders pass through the high-pressure and intermediate-pressure systems before reaching the low-pressure system. Which component of the anesthesia machine is present in the low-pressure system near atmospheric pressure?",
    options: [
      "Vaporizer",
      "Cylinder pressure gauge",
      "Oxygen pressure-failure alarm",
      "Pipeline inlet"
    ],
    answerIndex: 0,
    correctAnswerText: "Vaporizer"
  },
  {
    id: 119,
    image: "",
    question:
      "A new anesthesia technician accidentally tries to attach a nitrous oxide cylinder to the oxygen yoke of an anesthesia machine. The attachment fails because of a safety mechanism that prevents wrong cylinder attachment to the machine. Which safety system is responsible?",
    options: [
      "Diameter index safety system",
      "Pin index safety system",
      "Oxygen failure alarm",
      "Flowmeter arrangement"
    ],
    answerIndex: 1,
    correctAnswerText: "Pin index safety system"
  },
  {
    id: 120,
    image: "",
    question:
      "During pre-use check of an anesthesia machine, the resident is asked about the safest relative arrangement of flowmeters. To reduce the chance of delivering a hypoxic mixture, oxygen should be placed in which position in relation to other gases?",
    options: [
      "Most upstream of all gases",
      "Between air and nitrous oxide",
      "Most downstream of all gases, towards the patient",
      "Position does not matter if colour coding is present"
    ],
    answerIndex: 2,
    correctAnswerText: "Most downstream of all gases, towards the patient"
  },
  {
    id: 121,
    image: "",
    question:
      "A 35-year-old adult patient is breathing spontaneously under anesthesia using a Mapleson circuit. The anesthetist selects the circuit of choice for spontaneously ventilating adults, where fresh gas flow required is equal to minute ventilation. Which circuit is most appropriate?",
    options: [
      "Mapleson D",
      "Mapleson E",
      "Mapleson F",
      "Mapleson A"
    ],
    answerIndex: 3,
    correctAnswerText: "Mapleson A"
  },
  {
    id: 122,
    image: "",
    question:
      "A full-stomach patient develops coughing, choking, sudden desaturation, bronchospasm, cyanosis, and pink frothy secretions during induction of anesthesia. Chest X-ray later shows infiltrates predominantly in the right middle and right lower lung zones. Which complication is most likely?",
    options: [
      "Mendelson’s syndrome",
      "Malignant hyperthermia",
      "Venous air embolism",
      "Residual neuromuscular paralysis"
    ],
    answerIndex: 0,
    correctAnswerText: "Mendelson’s syndrome"
  },
  {
    id: 123,
    image: "",
    question:
      "A 38-year-old full-stomach patient is posted for emergency laparotomy. During pre-operative preparation, the anesthetist plans rapid sequence induction to minimize regurgitation and aspiration. Which of the following is one of the key steps in traditional rapid sequence induction?",
    options: [
      "Routine bag and mask ventilation with high pressure",
      "Cricoid pressure with cuffed endotracheal tube placement",
      "Use of laryngeal mask airway as definitive airway",
      "Extubation in light plane of anesthesia"
    ],
    answerIndex: 1,
    correctAnswerText: "Cricoid pressure with cuffed endotracheal tube placement"
  },
  {
    id: 124,
    image: "",
    question:
      "A patient under light anesthesia develops difficulty in ventilation with wheeze, increased peak airway pressure, and shark-fin appearance on capnography after exposure to a pungent inhalational agent. Which complication is most likely?",
    options: [
      "Laryngospasm",
      "Residual paralysis",
      "Bronchospasm",
      "Diffusion hypoxia"
    ],
    answerIndex: 2,
    correctAnswerText: "Bronchospasm"
  },
  {
    id: 125,
    image: "",
    question:
      "A 22-year-old man undergoing surgery after administration of succinylcholine and volatile anesthetic suddenly develops abrupt rise in end-tidal carbon dioxide, tachycardia, hypertension, masseter spasm, generalized rigidity, hypoxia, mixed acidosis, and later hyperthermia. Which of the following is the drug of choice for treatment?",
    options: [
      "Verapamil",
      "Sodium bicarbonate",
      "Glucose-insulin infusion",
      "Dantrolene"
    ],
    answerIndex: 3,
    correctAnswerText: "Dantrolene"
  },
  {
    id: 126,
    image: "",
    question:
      "A patient undergoing posterior fossa surgery in sitting position suddenly develops hypoxia, abrupt fall in end-tidal carbon dioxide, hypotension, arrhythmia, and a “mill-wheel” murmur. The event is due to air entering open venous channels and reaching the right atrium and right ventricle. Which complication is most likely?",
    options: [
      "Venous air embolism",
      "Bronchospasm",
      "Malignant hyperthermia",
      "Mendelson’s syndrome"
    ],
    answerIndex: 0,
    correctAnswerText: "Venous air embolism"
  },
  {
    id: 127,
    image: "",
    question:
      "During posterior fossa surgery in sitting position, a patient develops sudden fall in end-tidal carbon dioxide, hypoxia, hypotension, tachycardia, premature ventricular contractions, and a mill-wheel murmur. Transesophageal echocardiography confirms venous air embolism. Which of the following is the most sensitive invasive diagnostic modality for this condition?",
    options: [
      "Precordial Doppler",
      "Transesophageal echocardiography",
      "Chest X-ray",
      "Pulse oximetry"
    ],
    answerIndex: 1,
    correctAnswerText: "Transesophageal echocardiography"
  },
  {
    id: 128,
    image: "",
    question:
      "A 58-year-old man with chronic obstructive pulmonary disease presents with worsening breathlessness, productive cough, fever, accessory muscle use, and oxygen saturation of 85% on room air. He is conscious and cooperative. Which initial oxygen therapy is most appropriate?",
    options: [
      "Immediate 100% oxygen through non-rebreathing mask in all cases",
      "No oxygen until arterial blood gas report is available",
      "Controlled oxygen using Venturi mask or low-flow nasal cannula targeting saturation above 90%",
      "Immediate tracheostomy"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Controlled oxygen using Venturi mask or low-flow nasal cannula targeting saturation above 90%"
  },
  {
    id: 129,
    image: "",
    question:
      "A 58-year-old known case of chronic obstructive pulmonary disease is admitted with acute exacerbation. He is conscious, cooperative, tachypneic, and hypoxemic. The resident wants to choose an oxygen delivery device that provides precise control of inspired oxygen concentration and is ideal for chronic obstructive pulmonary disease patients. Which device is most appropriate?",
    options: [
      "Nasal cannula",
      "Simple face mask",
      "Non-rebreather mask",
      "Venturi mask"
    ],
    answerIndex: 3,
    correctAnswerText: "Venturi mask"
  },
  {
    id: 130,
    image: "",
    question:
      "A patient with acute exacerbation of chronic obstructive pulmonary disease has worsening respiratory distress despite initial oxygen therapy. Arterial blood gas shows pH 7.28, PaCO₂ 70 mmHg, and PaO₂ 55 mmHg. He is shifted to non-invasive ventilation with bilevel positive airway pressure. Which of the following best explains how positive end-expiratory pressure improves oxygenation?",
    options: [
      "It prevents alveolar collapse and improves functional residual capacity",
      "It decreases functional residual capacity and reduces alveolar surface area",
      "It increases venous return and increases cardiac output in all patients",
      "It causes complete suppression of spontaneous respiration"
    ],
    answerIndex: 0,
    correctAnswerText:
      "It prevents alveolar collapse and improves functional residual capacity"
  },
  {
    id: 131,
    image: "",
    question:
      "A 62-year-old obese patient with acute exacerbation of chronic obstructive pulmonary disease has persistent hypercapnia and increased work of breathing. He is alert, cooperative, and able to protect his airway. Non-invasive ventilation is planned. Which of the following is the most appropriate indication for non-invasive ventilation in this patient?",
    options: [
      "Uncontrolled seizures",
      "Acute hypercapnic exacerbation of chronic obstructive pulmonary disease",
      "Massive hematemesis with recurrent vomiting",
      "Severe facial trauma preventing mask fitting"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Acute hypercapnic exacerbation of chronic obstructive pulmonary disease"
  },
  {
    id: 132,
    image: "",
    question:
      "A patient with worsening respiratory failure despite non-invasive ventilation develops respiratory fatigue and altered sensorium. He is intubated and started on invasive mechanical ventilation. The team uses a lung-protective strategy. Which initial ventilator setting is most appropriate?",
    options: [
      "Tidal volume 12–15 mL/kg with zero positive end-expiratory pressure",
      "FiO₂ kept permanently at 100% irrespective of oxygen saturation",
      "Low tidal volume 6–8 mL/kg with positive end-expiratory pressure 5–15 cm H₂O",
      "Extubation without spontaneous breathing trial once sensorium improves"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Low tidal volume 6–8 mL/kg with positive end-expiratory pressure 5–15 cm H₂O"
  },
  {
    id: 133,
    image: "",
    question:
      "A 70-year-old chronic obstructive pulmonary disease patient presents with severe dyspnea, respiratory rate 32/min, diaphoresis, and oxygen saturation of 85% on room air. He is alert and responsive, but arterial blood gas later shows worsening hypercapnia and hypoxemia despite oxygen therapy. Which of the following is the next appropriate step when non-invasive support fails with worsening sensorium?",
    options: [
      "Continue nasal cannula oxygen",
      "Increase only bronchodilator frequency",
      "Give only systemic corticosteroids",
      "Perform endotracheal intubation and mechanical ventilation"
    ],
    answerIndex: 3,
    correctAnswerText: "Perform endotracheal intubation and mechanical ventilation"
  },
  {
    id: 134,
    image: "",
    question:
      "A patient with chronic neuropathic pain is advised transcutaneous electrical nerve stimulation. The pain physician explains that stimulation of non-pain fibers activates inhibitory interneurons in the dorsal horn and reduces pain transmission. Which of the following fibers are mainly stimulated to close the pain gate?",
    options: [
      "A-beta fibers",
      "C fibers",
      "A-delta fibers",
      "Postganglionic sympathetic fibers"
    ],
    answerIndex: 0,
    correctAnswerText: "A-beta fibers"
  },
  {
    id: 135,
    image: "",
    question:
      "A 58-year-old patient recovering from acute exacerbation of chronic obstructive pulmonary disease has improved after invasive mechanical ventilation. He is now conscious, hemodynamically stable, has good mental status, FiO₂ requirement is 0.35, and PEEP is 5 cm H₂O. Which of the following best indicates readiness for weaning from mechanical ventilation?",
    options: [
      "Rapid Shallow Breathing Index more than 100",
      "Rapid Shallow Breathing Index less than 100",
      "Persistent need for high FiO₂ more than 0.6",
      "Worsening respiratory fatigue after extubation"
    ],
    answerIndex: 1,
    correctAnswerText: "Rapid Shallow Breathing Index less than 100"
  },
  {
    id: 136,
    image: "",
    question:
      "A 55-year-old man suddenly collapses in the hospital ward. He is unresponsive and has no normal breathing. High-quality cardiopulmonary resuscitation is initiated. According to basic life support sequence, which of the following is the correct initial approach?",
    options: [
      "Airway → Breathing → Circulation",
      "Breathing → Airway → Compression",
      "Compression → Airway → Breathing",
      "Defibrillation → Breathing → Airway"
    ],
    answerIndex: 2,
    correctAnswerText: "Compression → Airway → Breathing"
  },
  {
    id: 137,
    image: "",
    question:
      "A 6-month-old infant is found unresponsive at home by a single rescuer. The rescuer confirms absent breathing and no definite pulse within 10 seconds. No mobile phone is immediately available. What is the most appropriate next step?",
    options: [
      "Leave immediately to activate emergency response system",
      "Give only rescue breaths for 10 minutes",
      "Wait until another rescuer arrives",
      "Perform 2 minutes of CPR before leaving to activate emergency response system"
    ],
    answerIndex: 3,
    correctAnswerText:
      "Perform 2 minutes of CPR before leaving to activate emergency response system"
  },
  {
    id: 138,
    image: "",
    question:
      "A 45-year-old man collapses in the emergency department. Monitor shows pulseless ventricular tachycardia. Chest compressions are ongoing. Which of the following is the most appropriate shock strategy using a biphasic defibrillator?",
    options: [
      "120–200 J shock",
      "2–4 J/kg shock",
      "360 J shock",
      "Defibrillation is not useful in this rhythm"
    ],
    answerIndex: 0,
    correctAnswerText: "120–200 J shock"
  },
  {
    id: 139,
    image: "",
    question:
      "A 55-year-old man suddenly collapses in a public place. A bystander checks the scene safety, finds him unresponsive, shouts for help, activates the emergency response system, and gets an AED. The patient is not breathing normally and no definite pulse is felt within 10 seconds. What should be done next?",
    options: [
      "Place the patient in recovery position",
      "Start CPR immediately with chest compressions",
      "Give rescue breathing only at 10 breaths/min",
      "Wait until the emergency response team arrives"
    ],
    answerIndex: 1,
    correctAnswerText: "Start CPR immediately with chest compressions"
  },
  {
    id: 140,
    image: "",
    question:
      "A 62-year-old patient develops sudden cardiac arrest inside the ICU. CPR is started and oxygen is given. Monitor shows ventricular fibrillation. After the first shock, CPR is resumed for 2 minutes. Rhythm check again shows persistent shockable rhythm. Which drug should be given during the next CPR cycle according to ACLS protocol?",
    options: [
      "Atropine",
      "Sodium bicarbonate",
      "Epinephrine",
      "Verapamil"
    ],
    answerIndex: 2,
    correctAnswerText: "Epinephrine"
  },
  {
    id: 141,
    image: "",
    question:
      "A 48-year-old man is undergoing CPR for cardiac arrest. After 2 minutes of high-quality CPR, the rhythm remains pulseless. The team leader asks the junior resident to quickly recall the reversible causes of cardiac arrest and choose the correct route/drug principle during CPR. Which of the following is correct?",
    options: [
      "Endotracheal route is the most preferred route for all CPR drugs",
      "Return of spontaneous circulation is suggested by fall in PETCO₂",
      "Pediatric adrenaline dose is 1 mg IV bolus",
      "IV adrenaline is given every 3–5 minutes during CPR"
    ],
    answerIndex: 3,
    correctAnswerText: "IV adrenaline is given every 3–5 minutes during CPR"
  },
  {
    id: 142,
    image: "",
    question:
      "A 3-year-old child suddenly starts choking while eating peanuts. He is unable to speak or cough and becomes unresponsive. The caregiver brings the child to the emergency area. Which of the following is the most appropriate immediate step?",
    options: [
      "Call for help and start CPR",
      "Encourage coughing and observe",
      "Perform 5 back blows and 5 chest compressions",
      "Give Heimlich maneuver only"
    ],
    answerIndex: 0,
    correctAnswerText: "Call for help and start CPR"
  },
  {
    id: 143,
    image: "",
    question:
      "A 32-year-old woman is planned for a minor surgical procedure under local anesthesia. The anesthetist explains that ester local anesthetics are more commonly associated with allergy and have shorter duration of action compared to amide local anesthetics. Which of the following statements is correct regarding local anesthetic pharmacology?",
    options: [
      "Amide local anesthetics are metabolized by plasma cholinesterase",
      "Ester local anesthetics are identified by one “i” and are metabolized by plasma cholinesterase",
      "Amide local anesthetics have high allergic potential",
      "Procaine is a long-acting local anesthetic"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Ester local anesthetics are identified by one “i” and are metabolized by plasma cholinesterase"
  },
  {
    id: 144,
    image: "",
    question:
      "A patient develops circumoral numbness, light-headedness, tinnitus, muscular twitching, and later generalized tonic-clonic seizures after accidental intravascular injection of a local anesthetic. ECG shows widening of QRS complex and prolonged PR interval. Which of the following is the drug of choice for severe cardiovascular toxicity due to local anesthetic systemic toxicity?",
    options: [
      "Intravenous lignocaine",
      "20% intralipid emulsion",
      "Verapamil",
      "Calcium gluconate"
    ],
    answerIndex: 1,
    correctAnswerText: "20% intralipid emulsion"
  },
  {
    id: 145,
    image: "",
    question:
      "A 6-year-old child is scheduled for intravenous cannulation before a minor procedure. The anesthetist applies a topical anesthetic cream containing lignocaine and prilocaine before cannulation. Which of the following is a known important adverse effect of this preparation, especially in infants?",
    options: [
      "Malignant hyperthermia",
      "Severe hypotension due to thoracolumbar sympathectomy",
      "Methemoglobinemia",
      "Total spinal anesthesia"
    ],
    answerIndex: 2,
    correctAnswerText: "Methemoglobinemia"
  },
  {
    id: 146,
    image: "",
    question:
      "A 28-year-old pregnant woman develops nausea, pallor, dizziness, and hypotension soon after spinal anesthesia for cesarean section. The anesthetist immediately lowers the head end by 15 degrees, gives crystalloid bolus, and plans vasopressor therapy. Which vasopressor is preferred in pregnancy because it has the least risk of fetal acidosis?",
    options: [
      "Adrenaline",
      "Atropine",
      "Ephedrine",
      "Phenylephrine"
    ],
    answerIndex: 3,
    correctAnswerText: "Phenylephrine"
  },
  {
    id: 147,
    image: "",
    question:
      "A 24-year-old female develops severe frontal–occipital headache 24 hours after spinal anesthesia. The headache worsens on sitting and standing, improves on lying down, and is associated with neck discomfort. Which of the following is the most important pathophysiology behind this condition?",
    options: [
      "Cerebrospinal fluid leak causing traction on meninges",
      "Epidural opioid-induced central receptor activation",
      "Staphylococcal infection from skin flora",
      "Intrathecal local anesthetic-induced sympathetic blockade"
    ],
    answerIndex: 0,
    correctAnswerText: "Cerebrospinal fluid leak causing traction on meninges"
  },
  {
    id: 148,
    image: "",
    question:
      "A 5-year-old child undergoing below-umbilical surgery is planned for postoperative analgesia using a caudal epidural block. The anesthetist identifies the sacral hiatus and performs the block. Which of the following statements regarding epidural and caudal epidural anesthesia is correct?",
    options: [
      "Epidural drug is deposited into the subarachnoid space",
      "Epidural space can be identified by loss of resistance or hanging drop technique",
      "Epidural anesthesia has rapid onset within 1–2 minutes",
      "Caudal epidural is contraindicated in pediatric below-umbilical surgery"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Epidural space can be identified by loss of resistance or hanging drop technique"
  },
  {
    id: 149,
    image: "",
    question:
      "A 32-year-old pregnant woman is planned for regional anesthesia for lower abdominal surgery. The anesthetist explains that spinal anesthesia produces a rapid dense block, while epidural anesthesia allows catheter-based titration and is preferred for labour analgesia. Which of the following statements correctly differentiates spinal anesthesia from epidural anesthesia?",
    options: [
      "Spinal anesthesia is given outside dura, while epidural anesthesia is given into cerebrospinal fluid",
      "Epidural anesthesia has faster onset than spinal anesthesia",
      "Spinal anesthesia uses small volume drug in subarachnoid space, while epidural anesthesia uses larger volume drug outside dura",
      "Differential nerve blockade is not possible with epidural anesthesia"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Spinal anesthesia uses small volume drug in subarachnoid space, while epidural anesthesia uses larger volume drug outside dura"
  },
  {
    id: 150,
    image: "",
    question:
      "A 45-year-old patient is posted for short-duration hand surgery. The anesthetist considers either a brachial plexus block or intravenous regional anesthesia. Which of the following statements is correct regarding upper limb regional anesthesia?",
    options: [
      "Interscalene block is most commonly used for distal hand surgery",
      "Axillary block has the highest risk of pneumothorax",
      "Bupivacaine is the agent of choice for intravenous regional anesthesia",
      "Supraclavicular block provides dense block of the upper limb but carries the highest risk of pneumothorax"
    ],
    answerIndex: 3,
    correctAnswerText:
      "Supraclavicular block provides dense block of the upper limb but carries the highest risk of pneumothorax"
  },
  {
    id: 151,
    image: "images/IMG_4446.jpeg",
    question:
      "A 2-month-old infant is brought with poor feeding, vomiting, failure to thrive, jaundice, and bilateral oil-drop cataracts. The child had symptoms after starting milk feeds. The biochemical pathway involved shows accumulation of galactose and galactitol due to an enzyme defect in galactose metabolism. Which enzyme deficiency is most likely responsible for this condition?",
    options: [
      "Galactose-1-phosphate uridyl transferase",
      "Galactokinase",
      "UDP-galactose-4-epimerase",
      "Lactase"
    ],
    answerIndex: 0,
    correctAnswerText: "Galactose-1-phosphate uridyl transferase"
  },
  {
    id: 152,
    image: "images/IMG_4447.jpeg",
    question:
      "A 55-year-old man presents with sudden onset of severe pain, redness, and swelling of the great toe. He is diagnosed with acute gouty arthritis. His physician later starts a drug that is converted by xanthine oxidase into alloxanthine, which then irreversibly inhibits xanthine oxidase by suicide inhibition. Which of the following drugs acts by this mechanism?",
    options: [
      "Probenecid",
      "Allopurinol",
      "Colchicine",
      "Febuxostat"
    ],
    answerIndex: 1,
    correctAnswerText: "Allopurinol"
  },
  {
    id: 153,
    image: "images/IMG_4448.jpeg",
    question:
      "A 2-year-old child is brought with generalized edema, skin lesions, depigmented sparse hair, anorexia, enlarged fatty liver, and low plasma albumin. The child’s calorie intake is relatively adequate, but protein intake is poor. Which of the following is the most likely diagnosis?",
    options: [
      "Marasmus",
      "Scurvy",
      "Kwashiorkor",
      "Beriberi"
    ],
    answerIndex: 2,
    correctAnswerText: "Kwashiorkor"
  },
  {
    id: 154,
    image: "images/IMG_4449.jpeg",
    question:
      "A 9-month-old infant is brought with arrested growth, severe muscle wasting, weakness, anemia, and very prominent ribs. On examination, there is loss of subcutaneous fat, but no edema. The child appears alert and irritable. Which of the following best describes this condition?",
    options: [
      "Protein deficiency with preserved subcutaneous fat",
      "Vitamin B6 deficiency due to isolated protein lack",
      "Protein deficiency with edema and fatty liver",
      "Deficiency of both proteins and calories"
    ],
    answerIndex: 3,
    correctAnswerText: "Deficiency of both proteins and calories"
  },
  {
    id: 155,
    image: "images/IMG_4450.jpeg",
    question:
      "A 52-year-old male has a history of bone pain and repeated fractures. He is suffering from chronic renal failure. On examination, the following abnormality is observed. A patient is likely to be suffering from deficiency of which of the following compound?",
    options: [
      "Ascorbic acid",
      "Retinoic acid",
      "Folic acid",
      "Calcitriol"
    ],
    answerIndex: 3,
    correctAnswerText: "Calcitriol"
  },
  {
    id: 156,
    image: "images/IMG_4451.jpeg",
    question:
      "As shown in the image below, megaloblasts in a bone marrow smear are seen in which of the following vitamin deficiencies?",
    options: [
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B9"
    ],
    answerIndex: 3,
    correctAnswerText: "Vitamin B9"
  },
  {
    id: 157,
    image: "images/IMG_4452.jpeg",
    question:
      "Following oral manifestation is seen in deficiency of which of the following vitamins?",
    options: [
      "Vitamin D",
      "Vitamin C",
      "Vitamin B12",
      "Vitamin B9"
    ],
    answerIndex: 1,
    correctAnswerText: "Vitamin C"
  },
  {
    id: 158,
    image: "images/IMG_4453.jpeg",
    question:
      "A child is brought with progressive neurodevelopmental delay, low IQ, hepatosplenomegaly, and vertical gaze palsy. Microscopy shows foam cells, and electron microscopy finding is given below. The pathway involves degradation of sphingomyelin into its metabolite. Which enzyme deficiency is most likely responsible for this disorder?",
    options: [
      "β-glucocerebrosidase",
      "Hexosaminidase A",
      "Sphingomyelinase",
      "α-galactosidase A"
    ],
    answerIndex: 2,
    correctAnswerText: "Sphingomyelinase"
  },
  {
    id: 159,
    image: "images/IMG_4454.jpeg",
    question:
      "A 6-year-old boy presents with massive splenomegaly, hepatomegaly, anemia, thrombocytopenia, and multiple bruise marks over the body. Bone marrow biopsy is shown below. X-ray shows Erlenmeyer flask deformity of long bones. Which enzyme deficiency is most likely responsible for this condition?",
    options: [
      "α-Galactosidase A",
      "Sphingomyelinase",
      "Hexosaminidase A",
      "β-Glucocerebrosidase"
    ],
    answerIndex: 3,
    correctAnswerText: "β-Glucocerebrosidase"
  },
  {
    id: 160,
    image: "images/IMG_4456.jpeg",
    question:
      "A patient presents with painful red tongue, cracks at the angle of mouth, and ocular complaints. Examination shows glossitis, cheilosis / angular stomatitis, and corneal neovascularization. Deficiency of which of the following vitamin is most likely responsible?",
    options: [
      "Vitamin B2",
      "Vitamin B3",
      "Vitamin B6",
      "Vitamin B12"
    ],
    answerIndex: 0,
    correctAnswerText: "Vitamin B2"
  },
  {
    id: 161,
    image: "images/IMG_4458.jpeg",
    question:
      "An infant presents with loss of motor skills, increased startle response to noise, seizures, hyperacusis, progressive neurodegeneration, and blindness. Fundus examination finding is given below. There is no hepatosplenomegaly. Which enzyme deficiency is most likely responsible for this condition?",
    options: [
      "Sphingomyelinase",
      "Hexosaminidase A",
      "β-Glucocerebrosidase",
      "α-Galactosidase A"
    ],
    answerIndex: 1,
    correctAnswerText: "Hexosaminidase A"
  },
  {
    id: 162,
    image: "images/IMG_4459.jpeg",
    question:
      "A child presents with perioral dermatitis, erythematous lesions around the buttocks and perineal region, recurrent diarrhea, poor growth, and irritability. The condition is due to defective intestinal absorption caused by ZIP-4 transporter deficiency. Deficiency of which of the following minerals is most likely responsible?",
    options: [
      "Copper",
      "Selenium",
      "Zinc",
      "Iron"
    ],
    answerIndex: 2,
    correctAnswerText: "Zinc"
  },
  {
    id: 163,
    image: "images/IMG_4460.jpeg",
    question:
      "An infant presents with delayed eruption of teeth, reddish-brown discoloration of teeth, pink-stained diapers, and blisters over sun-exposed areas. Under ultraviolet light, the teeth show reddish fluorescence which is shown below. The condition is inherited as an autosomal recessive disorder. Which enzyme deficiency is most likely responsible for this condition?",
    options: [
      "Porphobilinogen deaminase",
      "Ferrochelatase",
      "ALA dehydratase",
      "Uroporphyrinogen III synthase"
    ],
    answerIndex: 3,
    correctAnswerText: "Uroporphyrinogen III synthase"
  },
  {
    id: 164,
    image: "images/IMG_4461.jpeg",
    question:
      "An infant presents with milky white skin, white hair, and very light-colored irides. The child has defective melanin production due to deficiency of a copper-containing enzyme involved in tyrosine metabolism. Which enzyme deficiency is most likely responsible for this condition?",
    options: [
      "Tyrosinase",
      "Tyrosine hydroxylase",
      "Phenylalanine hydroxylase",
      "Homogentisate oxidase"
    ],
    answerIndex: 0,
    correctAnswerText: "Tyrosinase"
  },
  {
    id: 165,
    image: "images/IMG_4462.jpeg",
    question:
      "A patient presents with photosensitive dermatitis around the neck, forming a characteristic Casal’s necklace. He also has diarrhea, dementia, and glossitis. History reveals defective intestinal and renal tubular transport of neutral amino acids, causing tryptophan malabsorption. Deficiency of which of the following is most likely responsible for this condition?",
    options: [
      "Tyrosine",
      "Tryptophan",
      "Phenylalanine",
      "Methionine"
    ],
    answerIndex: 1,
    correctAnswerText: "Tryptophan"
  },
  {
    id: 166,
    image: "images/IMG_4463.jpeg",
    question:
      "A child presents with dry rough skin and multiple keratotic follicular papules over the thighs and upper arms as shown in the image. History reveals poor dietary intake and recurrent episodes of diarrhea. The child also complains of difficulty seeing in dim light.\nDeficiency of which of the following vitamins is most likely responsible?",
    options: [
      "Vitamin D",
      "Vitamin C",
      "Vitamin A",
      "Vitamin B12"
    ],
    answerIndex: 2,
    correctAnswerText: "Vitamin A"
  },
  {
    id: 167,
    image: "images/IMG_4464.jpeg",
    question:
      "An infant presents with severe hypotonia, failure to thrive, hepatomegaly, and cardiomegaly. Muscle biopsy finding is given below which shows prominent vacuoles due to lysosomal accumulation of glycogen. The condition improves with recombinant enzyme therapy.\nWhich enzyme deficiency is most likely responsible?",
    options: [
      "Glucose-6-phosphatase",
      "Debranching enzyme",
      "Muscle phosphorylase",
      "Acid α-1,4-glucosidase"
    ],
    answerIndex: 3,
    correctAnswerText: "Acid α-1,4-glucosidase"
  },
  {
    id: 168,
    image: "images/IMG_4465.jpeg",
    question:
      "A 58-year-old man presents to the emergency department with sudden-onset severe chest pain, radiating to the left arm, associated with profuse sweating. ECG is given below and Serum enzyme analysis shows a flipped LDH ratio.\nWhich of the following serum findings is classically seen in this condition?",
    options: [
      "LDH-1 > LDH-2",
      "LDH-2 > LDH-1",
      "LDH-5 > LDH-4",
      "LDH-3 > LDH-1"
    ],
    answerIndex: 0,
    correctAnswerText: "LDH-1 > LDH-2"
  },
  {
    id: 169,
    image: "images/IMG_4466.jpeg",
    question:
      "A child presents with enlarged orange-yellow tonsils, recurrent peripheral neuropathy, muscle weakness, and early features of atherosclerosis. Blood investigations show markedly reduced levels of high-density lipoprotein. The image shows characteristic orange-colored enlarged tonsils due to accumulation of cholesterol esters in tissues.\nWhich of the following molecular defects is most likely responsible?",
    options: [
      "Lecithin cholesterol acyltransferase deficiency",
      "ATP-binding cassette transporter 1 deficiency",
      "Low-density lipoprotein receptor deficiency",
      "Apolipoprotein B-100 defect"
    ],
    answerIndex: 1,
    correctAnswerText: "ATP-binding cassette transporter 1 deficiency"
  },
  {
    id: 170,
    image: "images/IMG_4467.jpeg",
    question:
      "A child with previously normal development presents with recurrent seizures, focal neurological deficits, and episodes resembling stroke. Blood lactate is elevated. Muscle biopsy with modified Gomori trichrome stain shows ragged red fibers.\nWhich of the following mitochondrial disorders is most likely?",
    options: [
      "MERRF syndrome",
      "Kearns-Sayre syndrome",
      "MELAS syndrome",
      "Leigh syndrome"
    ],
    answerIndex: 2,
    correctAnswerText: "MELAS syndrome"
  },
  {
    id: 171,
    image: "images/IMG_4469.jpeg",
    question:
      "A young male develops sudden onset malaise, weakness, abdominal pain, and lumbar pain after taking cotrimoxazole. After 2 days, he develops jaundice and dark-colored urine. Peripheral smear image is given which shows bite cells / degmacytes and blister cells.\nWhich enzyme deficiency is most likely responsible for this condition?",
    options: [
      "Pyruvate kinase",
      "Hexokinase",
      "Glutathione reductase",
      "Glucose-6-phosphate dehydrogenase"
    ],
    answerIndex: 3,
    correctAnswerText: "Glucose-6-phosphate dehydrogenase"
  },
  {
    id: 172,
    image: "images/IMG_4470.jpeg",
    question:
      "The given instrument is used in the identification of which of the following spaces?",
    options: [
      "Ligamentum flavum",
      "Subarachnoid space",
      "Epidural space",
      "Paravertebral space"
    ],
    answerIndex: 2,
    correctAnswerText: "Epidural space"
  },
  {
    id: 173,
    image: "images/IMG_4471.jpeg",
    question:
      "While administering oxygen to a patient, the following device is used as a variable flow administer of oxygen. These devices work on the principle of:",
    options: [
      "Venturi",
      "Bernoulli’s",
      "Coanda",
      "All of the above"
    ],
    answerIndex: 0,
    correctAnswerText: "Venturi"
  },
  {
    id: 174,
    image: "images/IMG_4472.jpeg",
    question:
      "The given image shows a supraglottic airway device. According to the popular classification, what generation does this device belong to?",
    options: [
      "First",
      "Second",
      "Blockbuster",
      "Any of the above"
    ],
    answerIndex: 1,
    correctAnswerText: "Second"
  },
  {
    id: 175,
    image: "images/IMG_4473.jpeg",
    question:
      "The given device operates on fluid mechanics and allows a flow rate in relation to its gauge. The given gauge will be:",
    options: [
      "20 G",
      "22 G",
      "18 G",
      "26 G"
    ],
    answerIndex: 0,
    correctAnswerText: "20 G"
  },
  {
    id: 176,
    image: "images/IMG_4474.jpeg",
    question:
      "The picture demonstrates neuromuscular monitoring during anaesthesia. Identify the peripheral nerve stimulated.",
    options: [
      "Ulnar",
      "Radial",
      "Median",
      "Axillary"
    ],
    answerIndex: 0,
    correctAnswerText: "Ulnar"
  },
  {
    id: 177,
    image: "images/IMG_4475.jpeg",
    question:
      "Identify the given supraglottic airway device shown in the image.",
    options: [
      "Classic LMA",
      "I-gel",
      "Proseal",
      "LMA Blockbuster"
    ],
    answerIndex: 0,
    correctAnswerText: "Classic LMA"
  },
  {
    id: 178,
    image: "images/IMG_4477.jpeg",
    question:
      "Identify the given laryngoscope blade shown in the image.",
    options: [
      "Macintosh",
      "Millers",
      "Mccoy",
      "B or C"
    ],
    answerIndex: 1,
    correctAnswerText: "Millers"
  },
  {
    id: 179,
    image: "images/IMG_4478.jpeg",
    question:
      "You are managing an elderly obese male with history of snoring, daytime somnolence, chronic obstructive pulmonary disease, and hypertension following transurethral resection of prostate surgery. The given mask is used for which of the following purposes?",
    options: [
      "Non invasive ventilation",
      "Nebulisation",
      "Simple Oxygenation",
      "None of the Above"
    ],
    answerIndex: 0,
    correctAnswerText: "Non invasive ventilation"
  },
  {
    id: 180,
    image: "images/IMG_4479.jpeg",
    question:
      "All of the following are indications for the use of the device shown in the image EXCEPT:",
    options: [
      "Ionotropic support",
      "Poor intravenous access",
      "Cardiac output monitoring",
      "Total parenteral nutrition"
    ],
    answerIndex: 2,
    correctAnswerText: "Cardiac output monitoring"
  },

];
