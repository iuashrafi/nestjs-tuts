import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get('/')
  getHomePage() {
    return 'Home Page for public';
  }

  @Get('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req: any): string {
    const token = this.authService.generateToken(req.user);
    return token;
  }

  @Get('/profile')
  @UseGuards(AuthGuard('jwt'))
  profile() {
    return 'This is a private profile page';
  }
}
