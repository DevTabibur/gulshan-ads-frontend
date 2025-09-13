import { AlertTriangle } from "lucide-react"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "./ui/card"

const AccountApproved = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background transition-colors">
            <Card className="w-full max-w-lg border-0 shadow-xl rounded-2xl bg-white/90 dark:bg-[#181c23]/90 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none border-2 border-yellow-400 rounded-2xl" style={{ boxShadow: "0 0 0 2px #fde047" }} />
                <CardHeader className="flex flex-col items-center gap-3 pt-8 pb-2">
                    <div className="flex items-center justify-center bg-yellow-100 dark:bg-yellow-900 rounded-full p-3 mb-2 shadow-sm">
                        <AlertTriangle className="h-9 w-9 text-yellow-500" />
                    </div>
                    <CardTitle className="text-center text-2xl font-semibold text-yellow-700 dark:text-yellow-400 drop-shadow">
                        Account Not Approved
                    </CardTitle>
                    <CardDescription className="text-center text-base text-gray-700 dark:text-gray-300 mt-1">
                        Your account is still not approved by our internal team.<br />
                        Please contact our operation number for approval:
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center gap-3 mt-3">
                        <span className="font-bold text-xl text-gray-900 dark:text-white tracking-wide select-all">
                            +8801722570947
                        </span>
                        <Badge
                            variant="outline"
                            className="mt-2 text-base px-5 py-2 border-yellow-400 text-yellow-700 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-900/40 font-medium shadow-sm"
                        >
                            Approval Required
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}

export default AccountApproved      