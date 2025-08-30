import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { HashingService } from 'src/auth/hashing/hashing.service';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly hashingService: HashingService,
    ) { }

    async create(createUserDto: CreateUserDto) {

        const passwordHash = await this.hashingService.hash(
            createUserDto.password
        );

        try {

            const userData = {
                name: createUserDto.name,
                email: createUserDto.email,
                passwordHash,
                phone: createUserDto.phone,
            }

            const newUser = this.userRepository.create(userData);
            await this.userRepository.save(newUser);

            return newUser;

        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Telefone ou e-mail já cadastrado.');
            }
            throw new Error(error.message);
        }
    }

}
