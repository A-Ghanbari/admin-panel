import RenderRoutes from 'routes'
import ReagentCodeRouter from 'components/marketing/reagentCode/Router'
import PostDiscountRouter from 'components/marketing/postDiscount/Router'
import CampaignRouter from 'components/marketing/campaign/Router'
import DiscountRouter from 'components/marketing/discount/Router'
import LeaderBoardRouter from 'components/marketing/leaderBoard/Router'
import GamesRouter from 'components/marketing/games/Router'
import PrizesRouter from 'components/marketing/prizes/Router'
import EventsRouter from 'components/marketing/events/Router'
import LeaderBoardDiscountRouter from 'components/marketing/leaderBoardDiscount/Router'
import GamePrizesRouter from 'components/marketing/gamePrize/Router'
import DiscountPrizesRouter from 'components/marketing/discountPrize/Router'

const ROUTES = [
    {
        key: 'reagent-code',
        path: '/reagent-code/*',
        private: true,
        component: <ReagentCodeRouter />,
    },
    {
        key: 'post-discount',
        path: '/post-discount/*',
        private: true,
        component: <PostDiscountRouter />,
    },
    {
        key: 'campaign',
        path: '/campaign/*',
        private: true,
        component: <CampaignRouter />,
    },
    {
        key: 'discount',
        path: '/discount/*',
        private: true,
        component: <DiscountRouter />,
    },
    {
        key: 'leaderboard',
        path: '/leaderboard/*',
        private: true,
        component: <LeaderBoardRouter />,
    },
    {
        key: 'games',
        path: '/games/*',
        private: true,
        component: <GamesRouter />,
    },
    {
        key: 'prizes',
        path: '/prizes/*',
        private: true,
        component: <PrizesRouter />,
    },
    {
        key: 'events',
        path: '/events/*',
        private: true,
        component: <EventsRouter />,
    },
    {
        key: 'leaderBoard-discount',
        path: '/leaderBoard-discount/*',
        private: true,
        component: <LeaderBoardDiscountRouter />,
    }, {
        key: 'gamePrize',
        path: '/gamePrize/*',
        private: true,
        component: <GamePrizesRouter />,
    },
    {
        key: 'discountPrize',
        path: '/discountPrize/*',
        private: true,
        component: <DiscountPrizesRouter />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router