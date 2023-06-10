import { Message, Prisma } from '@prisma/client';
import prisma from '../database/prisma';
import { createMessageInput, getMessagesByUserIdInput } from '../interface';

const createMessage = async (
  createMessagePayload: createMessageInput
): Promise<Message | null> =>
  prisma.message.create({
    data: createMessagePayload,
  });

const getMessagesByUserId = async (
  getMessagesByUserIdPayload: getMessagesByUserIdInput
): Promise<Message[] | null> => {
  const getMessagesQuery: Prisma.MessageFindManyArgs = {
    where: {
      receiverId: getMessagesByUserIdPayload.receiverId,
      senderId: getMessagesByUserIdPayload.senderId,
    },
    take: getMessagesByUserIdPayload.take,
  };
  if (getMessagesByUserIdPayload.cursor) {
    getMessagesQuery.cursor = {
      id: getMessagesByUserIdPayload.cursor,
    };
  }
  return prisma.message.findMany(getMessagesQuery);
};

export { createMessage, getMessagesByUserId };
