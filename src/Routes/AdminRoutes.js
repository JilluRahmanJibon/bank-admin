import Dashboard from "../Pages/Dashboard";
import Deposit from "../Pages/Deposit";
import DepositConversation from "../Pages/DepositConversation";
import DepositConversationView from "../Pages/DepositConversationView";
import NewRequest from "../Pages/NewRequest";
import NoticeBoard from "../Pages/NoticeBoard";
import Payment from "../Pages/Payment";
import PendingOrders from "../Pages/PendingOrders";
import ProfileTable from "../Pages/ProfileTable";
import WithdrawBalance from "../Pages/WithdrawBalance.js";
import Login from '../Authentication/Login'
const AdminRoutes = [
  { path: "/", Component: Dashboard },
  { path: "/new-request", Component: NewRequest },
  { path: "/deposit-conversation", Component: DepositConversation },
  { path: "/deposit-conversation-view", Component: DepositConversationView },
  { path: "/deposit", Component: Deposit },
  { path: "/minus-balance", Component: WithdrawBalance },
  { path: "/notice-board", Component: NoticeBoard },
  { path: "/pending-orders", Component: PendingOrders },
  { path: "/profile/:id", Component: ProfileTable },
  { path: "/payment", Component: Payment },
  { path: "/login", Component: Login },
];
export default AdminRoutes;
