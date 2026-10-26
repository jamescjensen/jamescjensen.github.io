<template>
  <expandable-area icon-size="20px">
    <template #title> <span class="text-title">Job History</span></template>

    <div class="content-stack">
      <template v-for="(job, index) in jobs" :key="job.company">
        <expandable-area icon-size="18px">
          <template #title>
            <span class="text-title-subsection inline-spacing">
              {{ job.company }}
            </span>

            <span
              class="text-subtitle-subsection"
              :style="{ fontStyle: 'italic' }"
            >
              {{ job.dateRange }}
            </span>
          </template>

          <template v-for="(role) in job.roles" :key="role.title">
            <div class="pl-2">
              <span class="text-subtitle-subsection inline-spacing">
                {{ role.title }}
              </span>

              <span
                class="text-subtitle-subsection"
                :style="{ fontStyle: 'italic' }"
              >
                {{ role.dateRange }}
              </span>
            </div>
          </template>

          <div class="content-stack">
            <div>
              {{ job.description }}
            </div>

            <div class="skill-list">
              <v-chip
                v-for="skill in job.skills"
                :key="skill"
                class="skill-chip"
                density="compact"
                size="small"
              >{{ skill }}</v-chip>
            </div>

            <template v-if="job.projects.length > 0">
              <expandable-area
                class="projects-area"
                :initial-expanded="false"
              >
                <template #title> Projects </template>

                <div class="content-stack">
                  <masonry-grid
                    v-for="group in projectGroups(
                      job.projects,
                    )"
                    :key="group.priority"
                  >
                    <template
                      v-for="project in group.projects"
                      :key="project.title"
                    >
                      <div>
                        <project-card
                          :project="project"
                        />
                      </div>
                    </template>
                  </masonry-grid>
                </div>
              </expandable-area>
            </template>
          </div>

          <template v-if="index !== jobs.length - 1">
            <v-divider class="job-divider" />
          </template>
        </expandable-area>
      </template>
    </div>
  </expandable-area>
</template>

<script setup lang="ts">
  import ExpandableArea from '@/components/ExpandableArea.vue'
  import MasonryGrid from '@/components/MasonryGrid.vue'
  import ProjectCard, { type Project } from './ProjectCard.vue'

  type Job = {
    company: string
    description: string
    roles: Role[]
    dateRange: string
    imageUrl?: string
    skills: string[]
    projects: Project[]
  }

  type Role = {
    title: string
    dateRange: string
  }

  function projectGroups (projects: Project[]) {
    return [
      {
        priority: 'high',
        projects: projects.filter(project => project.highPriority),
      },
      {
        priority: 'low',
        projects: projects.filter(project => !project.highPriority),
      },
    ].filter(group => group.projects.length > 0)
  }

  const jobs: Job[] = [
    {
      company: 'Glassdome, Inc.',
      dateRange: 'Oct 2024 - Present',
      roles: [{

        title: 'Head of Backend Software Engineering',
        dateRange: 'July 2026 - Present',
      }, {
        title: 'Mid-Level Backend Software Engineer',
        dateRange: 'Oct 2024 - July 2026',
      }],
      description:
        'Seoul, South Korea. Glassdome builds industrial SaaS for manufacturing monitoring and product carbon footprints. I designed and developed Go backend systems, carbon footprint products, data-exchange integrations, access controls, and customer-facing APIs. I improved time-series query performance and database costs, and maintained production Kubernetes infrastructure on AWS with over 99.99% reported uptime over the past year. Assumed engineering leadership following the Director of Engineering’s departure, managing an 11-person engineering organization and reporting to the CEO. Owned roadmaps and delivery, working with domain experts, product, and design to translate complex requirements into technical designs and prioritized work.',
      skills: [
        'Go',
        'AWS',
        'Kubernetes',
        'Protobuf',
        'Postgres',
        'TimescaleDB',
        'Clickhouse',
      ],
      projects: [
        {
          title: 'Customer Project',
          description:
            'Coordinated delivery of customer requirements, collaborating with customer success and deployment teams to prioritize implementation. Implemented electronic signatures with token validation and configurable company- and group-level permissions, and company-wide automated data backups.',
          skills: ['Go', 'AWS', 'Kubernetes'],
        },
        {
          title: 'Certifications',
          description:
            'Represented engineering for ISO/IEC 27001:2022 and SOC 2 Type II renewal audits and a new TISAX certification. ISO/IEC 27001:2022 renewal was achieved; the SOC 2 and TISAX processes remain ongoing.',
          skills: ['ISO/IEC 27001', 'SOC 2', 'TISAX'],
        },
        {
          title: 'Cofinity-X Data Space Accelerator Program',
          description:
            'Supported PCF interoperability and customer onboarding through Cofinity-X\'s Data Space Accelerator program. Updated Cofinity-X connector compatibility and implemented asynchronous PCF requests. Trained business development team on data-sharing workflows and supported customer exchange validation.',
          skills: ['Go'],
          externalLinks: [
            {
              url: 'https://userguide.cofinity-x.com/en/articles/680628-program-overview',
              text: 'Data Space Accelerator program overview',
            },
          ],
        },
        {
          title: 'Carbonnara',
          highPriority: true,
          description:
            'Co-designed the architecture of a new carbon-footprint product, later assuming engineering leadership. Completed the initial core rebuild in three months against a six-month target. Led cross-functional planning with PCF consultants, product, and design. Built an MCP server for secure AI client integration, and spreadsheet-based LCA dataset ingestion with AI-assisted schema mapping.',
          skills: ['Go', 'AWS', 'Kubernetes', 'MCP'],
        },
        {
          title: 'Customer Pipelines',
          description:
            'Managed Python pipelines orchestrated with Airflow for three customers, importing PCF data from spreadsheets and MES data replicated through Airbyte. Helped PCF consultants experiment with data model changes and import new quarterly data.',
          skills: ['Python', 'Airflow', 'Airbyte'],
        },
        {
          title: 'Alarms Rework',
          description:
            'Implemented backend support for reusable monitoring definitions, staged notification policies, and alarm configuration APIs. Migrated valid legacy alarms and added safeguards against changing active alarm configurations.',
          skills: ['Go', 'AWS', 'Kubernetes'],
        },
        {
          title: 'Timeseries Database Migration',
          highPriority: true,
          description:
            'Led the shift history and manufacturing timeseries phases of a ClickHouse to TimescaleDB migration. Reduced the most expensive query times from approximately 12 seconds to under 1 second and monthly database costs by approximately $2,000.',
          skills: ['Go', 'ClickHouse', 'PostgreSQL', 'TimescaleDB'],
        },
        {
          title: 'Waypoint APIs',
          highPriority: true,
          description:
            'Designed and implemented API key authenticated customer APIs for carbon-footprint and manufacturing-data ingestion, tag discovery, and historical retrieval. Used Redpanda for asynchronous ingestion processing and implemented latest, raw, and aggregated timeseries queries.',
          skills: ['Go', 'Redpanda', 'API Design'],
        },
        {
          title: 'QuantumSurf Interoperability',
          description:
            'Led interoperability with QuantumSurf’s PCF data exchange. Authored technical and API specifications and worked directly with QuantumSurf engineering to deliver the integration.',
          skills: ['Go', 'API Design'],
        },
        {
          title: 'OEE',
          description:
            'Developed backend functionality for Overall Equipment Effectiveness tracking, leading downtime implementation and moving Pareto chart calculations to the backend to improve reporting across large time ranges.',
          skills: ['Go', 'TimescaleDB'],
        },
        {
          title: 'Cofinity-X / Catena-X Interoperability',
          highPriority: true,
          description:
            'Led technical design and implementation of interoperability between Glassdome’s PCF product and Cofinity-X’s data exchange. Built multi-step PCF exchange workflows using a Redpanda-backed saga to coordinate external calls. Worked directly with Cofinity-X engineers to resolve API ambiguities and improve integration documentation.',
          skills: ['Go', 'Redpanda'],
        },
        {
          title: 'Zitadel Migration',
          description:
            'Contributed to the implementation, maintenance, and delivery of the authentication-system migration from Kratos to Zitadel.',
          skills: ['Go', 'Kratos', 'Zitadel'],
        },
        {
          title: 'ACLs',
          description:
            'Led the design and implementation of access-control lists using SpiceDB, ensuring permissions propagated correctly without disrupting existing customers.',
          skills: ['Go', 'SpiceDB'],
        },
        {
          title: 'PCF Emission Activity Upload',
          description:
            'Built a customer PCF activity data ingestion workflow, supporting CSV/XLSX uploads, configurable schema mappings, row-level validation errors, and integration with PCF calculation pipelines.',
          skills: ['Go'],
        },
        {
          title: 'ecoinvent Database Upload',
          description:
            'Replaced a static calculation factor dataset with spreadsheet-based imports, allowing new ecoinvent versions without code changes or database migrations. Maintained compatibility with subsequent dataset versions.',
          skills: ['Go', 'Data Ingestion'],
        },
        {
          title: 'Siemens SiGREEN Integration',
          description:
            'Owned technical design and implementation of PCF interoperability between Glassdome and Siemens SiGREEN. Established the technical requirements and delivered the integration.',
          skills: ['Go'],
        },
      ],
    },
    {
      company: 'MXN Technology',
      dateRange: 'Sep 2021 - Oct 2024',
      roles: [{

                title: 'Lead Software Engineer',
                dateRange: 'Aug 2022 - Oct 2024',
              },
              {
                title: 'Software Engineer',
                dateRange: 'Sep 2021 - Aug 2022',
              }],
      description:
        'Seoul, South Korea. Led the internal R&D engineering team at an international logistics company, proposing and implementing new technologies. Consolidated infrastructure across teams from AWS, GCP, and Azure onto GCP, centralizing operations and enabling automated deployment pipelines. Led development of a Flutter-based beauty marketplace, establishing app foundations and owning TypeScript backend services and infrastructure designed for 300,000 daily users across Korea and the US. Designed order and warehouse management systems integrating Shopify, Naver SmartStore, and Coupang, and modernized Vue and JavaScript codebases to Vue 3 and TypeScript.',
      skills: [
        'TypeScript',
        'Node.js',
        'Vue',
        'Quasar',
        'Flutter / Dart',
        'Google Cloud',
        'PHP',
        'Laravel',
      ],
      projects: [
        {
          title: 'yless',
          highPriority: true,
          description:
            'Led development of a Flutter-based beauty e-commerce app with a TypeScript backend on AWS. Established application foundations, onboarded remote contractors, and owned backend services and infrastructure designed for 300,000 daily users across Korea and the US.',
          skills: ['Flutter / Dart', 'TypeScript', 'AWS'],
        },
        {
          title: 'Proveneer',
          description:
            'Rebranded MintCode for art galleries, rebuilding the client application while reusing much of the existing backend.',
          skills: [
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Vue',
            'Quasar',
            'Flutter / Dart',
            'Google Cloud',
          ],
        },
        {
          title: 'MintCode',
          description:
            'Led development of an NFT provenance app with a Dart/Flutter client and TypeScript backend deployed on Google Cloud. Presented at NFT.NYC in 2023.',
          skills: [
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Flutter / Dart',
            'Google Cloud',
          ],
          externalLinks: [
            {
              url: 'https://mintcode.xyz/',
              text: 'MintCode website',
            },
          ],
        },
        {
          title: 'Customer Warehouse Management System',
          description:
            'Upgraded a client-specific inventory management webapp to Laravel 10 and PHP 8.2, rewriting substantial parts and adding type safety. Built with PHP and TypeScript and deployed on Google Cloud.',
          skills: ['PHP', 'Laravel', 'TypeScript', 'Google Cloud'],
        },
        {
          title: 'MintFulfillment Warehouse Management System',
          highPriority: true,
          description:
            'Designed a warehouse management webapp and server from the ground up, enabling workers to manage inventory and fulfill orders. Used TypeScript on both frontend and backend, with a Vue/Quasar/Capacitor client.',
          skills: ['TypeScript', 'Node.js', 'Vue', 'Quasar', 'Capacitor'],
        },
        {
          title: 'MintFulfillment Order Management System',
          highPriority: true,
          description:
            'Built an order management webapp and server connecting to Shopify, Naver SmartStore, and Coupang to import orders for warehouse fulfillment. Upgraded from Vue 2 to Vue 3 and converted the entire codebase from JavaScript to TypeScript.',
          skills: [
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Vue',
            'Quasar',
          ],
        },
      ],
    },
    {
      company: 'athenahealth',
      dateRange: 'Aug 2017 - Jul 2021',
      roles: [
        {

          title: 'Senior Member of Technical Staff',
          dateRange: 'Feb 2019 - Jul 2021',
        },
        {

          title: 'Member of Technical Staff',
          dateRange: 'Aug 2017 - Feb 2019',
        },
      ],
      description:
        'Watertown, MA, USA. Worked across Integration Services and Clinicals ePrescribing teams at an electronic medical record company. Contributed to the design, architecture, and implementation of e-prescribing modernization, replacing legacy workflows to support Surescripts’ NewSCRIPT standard. Served as long-term technical owner of a prescription-monitoring integration supporting approximately one million requests per day and reducing lookup time from 5–7 minutes to under 10 seconds. Migrated real-time prescription benefit checking from a Perl monolith to a Node.js microservice handling approximately six million requests per day. Served as Scrum Master for engineers based in the US and India.',
      skills: [
        'JavaScript',
        'AWS',
        'TypeScript',
        'Node.js',
        'Perl',
        'HTML / CSS',
      ],
      projects: [
        {
          title: 'ePrescribing Coupons',
          description:
            'Contributed to the technical design and initial implementation of a microservice retrieving coupons during the prescription flow, helping doctors find prices for their patients.',
          skills: ['TypeScript', 'AWS', 'Microservices'],
        },
        {
          title: 'NewSCRIPT',
          highPriority: true,
          description:
            'Contributed to the design and implementation of Surescripts\'s NewSCRIPT standard, rewriting substantial portions of legacy e-prescribing workflows and replacing error-prone logic. The broader ePrescribing team was recognized for achieving the highest prescribing accuracy in the 2020 Surescripts White Coat Award.',
          skills: ['JavaScript', 'Perl'],
          externalLinks: [
            {
              url: 'https://www.athenahealth.com/about/news/awards/athenahealth-wins-highest-accuracy-score-e-prescribing-quality-2020-surescripts-white-coat-award',
              text: 'athenahealth wins highest accuracy score in e-prescribing quality in 2020 Surescripts White Coat Award',
            },
          ],
        },
        {
          title: 'whoowns tool',
          description:
            'Built an internal developer tool at a hackathon to identify active contributors and owning teams for files in the monolith. Combined contribution history with ownership declarations to help engineers find relevant expertise.',
          skills: ['Developer Tooling'],
        },
        {
          title: 'Prescription Drug Monitoring Program',
          highPriority: true,
          description:
            'Integrated state prescription-monitoring systems into clinical workflows using Node.js and React, reducing lookup time from 5–7 minutes to under 10 seconds. Served as long-term technical owner of the integration, supporting approximately 1 million requests per day and collaborating directly with clinicians and external partners.',
          skills: ['TypeScript', 'Node.js', 'React', 'AWS'],
        },
        {
          title: 'Real-Time Benefit Check',
          highPriority: true,
          description:
            'Helped migrate real time prescription benefit checking from a Perl monolith into one of athenahealth\'s early production Node.js microservices. Supported approximately 6 million requests daily, integrating insurance-dependent vendors to provide drug pricing and lower-cost alternatives.',
          skills: ['JavaScript', 'TypeScript', 'Node.js', 'Perl', 'AWS'],
          externalLinks: [
            {
              url: 'https://www.fiercehealthcare.com/payer/humana-athenahealth-team-to-embed-member-data-providers-ehr-workflows',
              text: 'Humana, athenahealth team to embed member data in providers\' EHR workflows',
            },
          ],
        },
      ],
    },
    {
      company: 'Thales Visionix',
      dateRange: 'Jul 2016 - Jul 2017',
      roles: [
        {
          title: 'Associate Software Engineer',
          dateRange: 'Jul 2016 - Jul 2017',
        },
      ],
      description:
        'Billerica, MA, USA. Developed software for motion trackers used in research, construction, and military applications. Designed and built a C# Unity plugin and demonstration application for trade shows. Owned the motion-tracker SDK, fixing embedded firmware issues, supporting legacy products, and updating the C++/Qt client and libraries for new product releases. Also provided technical support to customers.',
      skills: ['C', 'C++', 'C#', 'Qt', 'Unity'],
      projects: [
        {
          title: 'InterSense IS-1500 Unity Plugin',
          description:
            'Sole designer and developer of a C# Unity plugin integrating motion-tracker data. Built a demonstration mapping physical tracker movement to the virtual camera, showcased at conferences and demonstrated during two visits aboard a submarine under construction at Newport News Shipbuilding.',
          skills: ['C#', 'Unity'],
          externalLinks: [],
        },
        {
          title: 'InterSense Motion Tracker SDK',
          description:
            'Worked on the shared SDK for the company’s motion trackers, taking ownership of firmware bugs and upgrading the software client to support newer trackers. Used C for embedded firmware and C++ and Qt for the client.',
          skills: ['C', 'C++', 'Qt'],
          externalLinks: [
            {
              url: 'https://www.intersense.com/dev-tools',
              text: 'InterSense',
            },
          ],
        },
      ],
    },
  ]
</script>
