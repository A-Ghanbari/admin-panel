import RenderRoutes from 'routes'
import AuthorRouter from 'components/blog/author/Router'
import TagRouter from 'components/blog/tag/Router'
import FqaRouter from 'components/blog/faq/Router'
import GroupRouter from 'components/blog/group/Router'
import ContentRouter from 'components/blog/content/Router'
import CommentRouter from 'components/blog/comment/Router'

const ROUTES = [
    {
        key: 'author',
        path: '/author/*',
        private: true,
        component: <AuthorRouter />,
    },
    {
        key: 'tag',
        path: '/tag/*',
        private: true,
        component: <TagRouter />,
    },
    {
        key: 'FAQ',
        path: '/FAQ/*',
        private: true,
        component: <FqaRouter />,
    },
    {
        key: 'group',
        path: '/group/*',
        private: true,
        component: <GroupRouter />,
    },
    {
        key: 'content',
        path: '/content/*',
        private: true,
        component: <ContentRouter />,
    },
    {
        key: 'comment',
        path: '/comment/*',
        private: true,
        component: <CommentRouter />,
    },
]
export default function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}
