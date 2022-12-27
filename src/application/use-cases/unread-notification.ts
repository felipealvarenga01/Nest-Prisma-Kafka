import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './notification-not-found';

interface UnreadReadNotificaionRequest {
  notificationId: string;
}

type UnreadReadNotificaionResponse = void;

@Injectable()
export class UnReadNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: UnreadReadNotificaionRequest,
  ): Promise<UnreadReadNotificaionResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);
  }
}
