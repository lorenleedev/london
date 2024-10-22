import {List} from "antd";
import JobCard from "@/ui/components/molecule/JobCard";

const JobList = ({data}) => {
  return (<List
    grid={{gutter: 16, column: 4}}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <JobCard {...item}/>
      </List.Item>
    )}>
  </List>)
}

export default JobList;

