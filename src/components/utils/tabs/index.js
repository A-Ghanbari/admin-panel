import { Tabs as AntTabs } from 'antd'
import "components/utils/tabs/tabs.scss"

const { TabPane } = AntTabs;

function Tabs({ tabs, position, forceRender, ...props }) {
  return (
    <div>
      <AntTabs type="card" tabPosition={position} {...props}>
        {tabs.map((tab, index) => (
          <TabPane tab={tab.title} key={index} forceRender={forceRender}>
            {tab.render}
          </TabPane>
        ))}
      </AntTabs>
    </div>
  )
}

export default Tabs