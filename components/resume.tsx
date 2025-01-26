import { Card, CardContent } from "@/components/ui/card"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold">Srivallabh Siddharth Nadadhur</h1>
                <p>Arlington, Virginia</p>
                <p>434-310-1088 | Email: srivallabh.ns@gmail.com</p>
                <p>LinkedIn: srivallabh-siddharth-nadadhur | GitHub: SidNadadhur</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">SUMMARY</h2>
                <p>
                  Gaining hands-on experience through an AI/ML research internship in the US while pursuing a Master's
                  degree in Data Science at The George Washington University, with plans to contribute to impactful
                  full-time roles after graduating in May 2025.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">TECHNICAL SKILLS</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Programming:</strong> Python, R, SQL (MySQL, PostgreSQL), MongoDB, Neo4j
                  </li>
                  <li>
                    <strong>Data Science:</strong> Numpy, Pandas, Exploratory Data Analysis, Matplotlib, Seaborn,
                    Plotly, Statistical Analysis, Scikit-Learn, PyTorch, TensorFlow, Keras, Model development evaluation
                    & optimization, Tableau, Excel
                  </li>
                  <li>
                    <strong>MLOps & Deployment:</strong> Docker, Kubernetes, Flask, Streamlit, RESTful APIs
                  </li>
                  <li>
                    <strong>Cloud & Distributed Computing:</strong> Amazon Web Services, Azure ML, Data Factory,
                    PySpark, Hadoop, Apache Kafka
                  </li>
                  <li>
                    <strong>Tools & Version Control:</strong> GitHub, Git, Jupyter Notebooks, Visual Studio Code,
                    Informatica, Conda
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">PROFESSIONAL EXPERIENCE</h2>
                <div className="mb-4">
                  <h3 className="font-semibold">Associate Data Scientist at Halvik Corp, Vienna, VA, USA</h3>
                  <p className="italic">January 2025 - present</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Improved processes by collaborating with cross-functional teams to optimize and deliver impactful
                      solutions using LLaMa.
                    </li>
                    <li>
                      Conducted statistical analyses, built predictive models to generate actionable insights into data
                      trends and customer needs.
                    </li>
                    <li>Designed and deployed algorithms to analyze, summarize, and visualize data effectively.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Software Engineer Intern at Cognizant, Hyderabad, India</h3>
                  <p className="italic">July 2022 - February 2023</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Designed and deployed scalable RESTful APIs using Spring Boot, ensuring high reliability through
                      testing with JUnit and Mockito.
                    </li>
                    <li>
                      Optimized database performance to reduce latency by 15% and developed client-focused interfaces
                      using Angular, HTML, CSS.
                    </li>
                    <li>
                      Delivered end-to-end solutions by collaborating across teams, leveraging Git for version control
                      and Agile methodologies.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">EDUCATION</h2>
                <div className="mb-4">
                  <h3 className="font-semibold">Master of Science, Data Science</h3>
                  <p>The George Washington University, Washington DC</p>
                  <p className="italic">Expected - May 2025</p>
                  <p>Recipient of Global Leaders Award - scholarship valued at $18,000</p>
                  <p>
                    <strong>Relevant Coursework:</strong> NLP, DL, ML, Data Warehousing, Visualisation of Complex Data,
                    Cloud Computing, DevOps, Algorithm Design
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Engineering, Information Technology</h3>
                  <p>Jawaharlal Nehru Technological University, Hyderabad, India</p>
                  <p className="italic">July 2022</p>
                  <p>
                    <strong>Relevant Coursework:</strong> OOPs concepts, Dynamic Programming, Databases, Business
                    Intelligence (financial analysis), Statistics
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">PROJECTS</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      AI Meets Law: Transforming Legal Research with RAG and Fine-Tuned LLM
                    </h3>
                    <p className="italic">December 2024</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Developed an AI-powered legal research system using RAG and fine-tuned LLM to deliver
                        context-aware legal insights.
                      </li>
                      <li>
                        Integrated Few Shot Learning to optimize training data requirements, reducing costs by 30% while
                        ensuring high accuracy.
                      </li>
                      <li>
                        Designed a FAISS-based retrieval system with semantic embeddings and advanced NLP preprocessing,
                        deployed an app via Streamlit for real-time querying and batch case analysis, enhancing legal
                        decision-making.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Apple Stock Prediction & Forecasting</h3>
                    <p className="italic">May 2024</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Engineered forecasting frameworks using LSTM, XGBoost, ARIMA, and Prophet to forecast Apple's
                        stock prices from 1985 - 2024.
                      </li>
                      <li>
                        Conducted advanced time series analysis to identify trends, thereby augmenting investment
                        decision-making processes.
                      </li>
                      <li>
                        Leveraged Python based frameworks and various machine learning libraries achieving a forecasting
                        accuracy of over 85%.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Bank Customer Churn Prediction using AWS</h3>
                    <p className="italic">April 2024</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Constructed predictive models with Amazon SageMaker, identifying at-risk customers enhancing
                        customer retention strategies.
                      </li>
                      <li>
                        Employed Amazon S3 for data storage & Amazon QuickSight for in-depth data visualization,
                        analysis, revealing key churn drivers.
                      </li>
                      <li>
                        Performed extensive data preprocessing, feature engineering and hyper parameter tuning to
                        optimize model performance.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Hospital Readmission Analysis using Tableau & Python</h3>
                    <p className="italic">Feb 2024</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Utilized Python visualizations and Tableau to analyze hospital readmission rates for diabetic
                        patients.
                      </li>
                      <li>
                        Developed Tableau dashboards with bar plots, line charts, heatmaps, and violin plots to
                        visualize demographic and clinical data.
                      </li>
                      <li>
                        Enabled dynamic filtering, thus providing actionable insights for targeted healthcare
                        interventions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">RESEARCH PUBLICATIONS</h2>
                <p>Digital Handwriting Recognition Using Hand Tracking by Using Media Pipe and OPENCV Libraries</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

