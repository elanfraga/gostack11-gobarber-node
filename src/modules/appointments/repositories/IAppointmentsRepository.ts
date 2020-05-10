import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IFindAllInMonthFromProvideDTO from '@modules/appointments/dtos/IFindAllInMonthFromProvideDTO';
import IFindAllInDayFromProvideDTO from '@modules/appointments/dtos/IFindAllInDayFromProvideDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProvideDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayFromProvideDTO,
  ): Promise<Appointment[]>;
}
