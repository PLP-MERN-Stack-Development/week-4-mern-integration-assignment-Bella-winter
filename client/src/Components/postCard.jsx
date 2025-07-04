import {Card, CaardHeader, CardContent, CardFooter, Button} from "@components/ui/card";
import { CheckCircleIcon, TrashIconc}  from "@heroicons/react/24/solid";
import { Button } from "@components/ui/button";

export default function PostCard({ post, onDelete }) {
    return (
        <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardHeader>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{post.title}</h2>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Button variant="outline" size="sm" onClick={() => onDelete(post.id)}>
                    <TrashIcon className="h-4 w-4 mr-2" />
                    Delete
                </Button>
                <Button variant="solid" size="sm">
                    <CheckCircleIcon className="h-4 w-4 mr-2" />
                    Approve
                </Button>
            </CardFooter>
        </Card>
    );
}