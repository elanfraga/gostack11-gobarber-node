import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';

export default INotificationnRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
