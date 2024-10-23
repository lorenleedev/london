"use client"
import {Content} from "antd/es/layout/layout";
import SectionTop from "@/ui/pages/Home/SectionTop";
import SectionAdvertisementList from "@/ui/pages/Home/SectionAdvertisementList";
import SectionAllList from "@/ui/pages/Home/SectionAllList";
import SectionRecommendList from "@/ui/pages/Home/SectionRecommendList";
import SectionDivider from "@/ui/components/molecule/SectionDivider";

const data = [{
  title: '헤드헌터가 올린 제목, 프론트엔드 개발',
  profile: '',
  name: '뉴욕파트너스',
  salary: '협의',
  location: '서울 강남',
  benefit: '식대포함, 자율 출퇴근',
  favorite: false,
  applied: false
},
  {
    title: '헤드헌터가 올린 제목, 인프라 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: true,
    applied: false
  },
  {
    title: '헤드헌터가 올린 제목, 데이터 사이언티스트',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false,
    applied: true
  },
  {
    title: '헤드헌터가 올린 제목, 백엔드 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false,
    applied: false
  }
];

const HomePage = () => {
  return (
    <Content>
      <SectionTop/>
      <SectionAdvertisementList jobList={data}/>
      <SectionRecommendList jobList={data}/>
      <SectionDivider  orientation={'right'} content={'매일 새로운 공고가 올라와요!'}/>
      <SectionAllList jobList={data}/>
    </Content>
  )
}

export default HomePage;