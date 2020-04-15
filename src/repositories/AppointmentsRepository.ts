import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointmente = await this.findOne({
      where: { date },
    });

    return findAppointmente || null;
  }
}

export default AppointmentRepository;
