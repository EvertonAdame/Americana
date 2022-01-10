import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsTeamStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constantsTeam';

const ProjectsTeam = () => (
  <Section nopadding id="projectsTeam">
    <SectionDivider />
    <SectionTitle main>Nossa equipe</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <div className="card-info">
            <CardInfo >{p.description}</CardInfo>
            </div>
            
  
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default ProjectsTeam;