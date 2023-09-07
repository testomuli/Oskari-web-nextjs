import CardList from '@/components/Cards/CardList'
import FeaturesList from '@/components/Features/FeaturesList'
import UsedBy from '@/components/UsedBy'
import featureItems from '@/utils/data/features.json'
import usedbyItems from '@/utils/data/usedby.json'
import whatsnew from '@/utils/data/whatsnew.json'

export const MdxComponents = {
  Features: () => (
    <FeaturesList title='With Oskari you can...' data={featureItems} />
  ),
  UsedBy: () => <UsedBy title='Used by' data={usedbyItems} />,
  WhatsNew: () => <CardList data={whatsnew} title='What´s new' />,
  p: ({ children }: any) => <p className='container--content'>{children}</p>,
}
