import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IFindAllMonthProviderDTO from '@modules/appointments/dtos/IFindAllMonthFromProviderDTO';

import IFindAllDayFromProviderDTO from '@modules/appointments/dtos/IFindAllDayFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;

  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;

  findAllInMonthFromProvider(
    data: IFindAllMonthProviderDTO,
  ): Promise<Appointment[]>;

  findAllInDayFromProvider(
    data: IFindAllDayFromProviderDTO,
  ): Promise<Appointment[]>;
}
