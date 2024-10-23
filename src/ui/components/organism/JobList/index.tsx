import {List} from "antd";
import JobCard, {JobCardProps} from "@/ui/components/molecule/JobCard";

interface JobListProps {
  jobList: JobCardProps[];
}
const JobList = ({jobList}: JobListProps) => {
  return (<List
    grid={{gutter: 16, column: 4}}
    dataSource={jobList}
    renderItem={(item) => (
      <List.Item>
        <JobCard {...item}/>
      </List.Item>
    )}>
  </List>)
}

export default JobList;

