/**
 * senderId - the id of the user that sent the message
 * receiverId - the id of the channel in which the user sent the message
 * content - the actual message the user sent
 */
export interface Message {
    messageId?: number
    senderId: number
    receiverId: number
    content: string
}