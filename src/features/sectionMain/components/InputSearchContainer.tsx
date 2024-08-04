import { Button, Flex } from "antd"
import SearchInput from "../../../components/SearchInput"
import Title from "antd/es/typography/Title"


const InputSearchContainer = ({placeholder}: {placeholder: string}) => {
  return (
    <Flex className="w-[400px] bg-white rounded-md flex absolute top-4 p-2 justify-between shadow-sm" gap={10} >
        <SearchInput placeholder={placeholder} isBackground={false}/>
        <Button className="flex justify-center items-center" type="primary">
              <Title level={5} style={{color: "#ffffff"}} className="mt-2">Search</Title>
        </Button>
    </Flex>
  )
}

export default InputSearchContainer