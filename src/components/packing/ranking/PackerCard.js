import { useSelector } from 'react-redux'
import { usersRanking } from 'tools/shared/packing'
import { addCommaToNumber } from 'tools/utils'
import { PACKING_RANKING as entity } from "tools/utils/entities"

export default function PackerCard() {
    // const { dataList } = useSelector(
    //     (s) => s[entity.pluralizeName]
    // )
    const firstUser = usersRanking[0]
    const secondUser = usersRanking[1]
    const thirdUser = usersRanking[2]

    const otherUsers = usersRanking.slice(3)

    return (
        <div className='ranking-wrapper'>
            <h1>نفرات برتر</h1>
            <div className='top-ranking-wrapper'>
                {firstUser && <div className='user-card user-1'>
                    <img src={firstUser.photo} />
                    <h4>{firstUser.fullName}</h4>
                    <h4>مجموع سفارش : {addCommaToNumber(firstUser.totalOrdersCount)}</h4>
                    <h4> مجموع اقلام سفارش : {addCommaToNumber(firstUser.totalOrdersItemsCount)}</h4>
                </div>}
                {secondUser && <div className='user-card user-2'>
                    <img src={secondUser.photo} />
                    <h4>{secondUser.fullName}</h4>
                    <h4>مجموع سفارش : {addCommaToNumber(secondUser.totalOrdersCount)}</h4>
                    <h4> مجموع اقلام سفارش : {addCommaToNumber(secondUser.totalOrdersItemsCount)}</h4>
                </div>}
                {thirdUser ? <div className='user-card user-3'>
                    <img src={thirdUser.photo} />
                    <h4>{thirdUser.fullName}</h4>
                    <h4>مجموع سفارش : {addCommaToNumber(thirdUser.totalOrdersCount)}</h4>
                    <h4> مجموع اقلام سفارش : {addCommaToNumber(thirdUser.totalOrdersItemsCount)}</h4>
                </div>
                    :
                    <div className='empty-card' />
                }
            </div>
            {otherUsers.length > 0 &&
                <div className='other-ranking-wrapper'>
                    {otherUsers.map(user => (
                        <div className='user-card' key={user.fullName}>
                            <img src={user.photo} />
                            <h4>{user.fullName}</h4>
                            <h4>مجموع سفارش : {addCommaToNumber(user.totalOrdersCount)}</h4>
                            <h4> مجموع اقلام سفارش : {addCommaToNumber(user.totalOrdersItemsCount)}</h4>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}