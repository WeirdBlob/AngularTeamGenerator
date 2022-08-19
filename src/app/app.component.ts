import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTeamGenerator';

  newMemberName: string = "";
  members: string[] = [];
  errorMessage = "";
  numberOfTeams: number | string = "";
  teams: string[][] = [];


  addMember() {

    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty!";
      return;
    }
    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName = "";
  }

  onAddInput(member: string) {
    this.newMemberName = member;
  }

  generateTeams() {

    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      return;
    }

    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randIdx = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randIdx, 1)[0];

        if (!member)  break;

        if (this.teams[i])
          this.teams[i].push(member);
        else
          this.teams[i] = [member];
      }
    }

    console.log(this.teams);
  }

  onGenerateInput(value: string) {
    this.numberOfTeams = Number(value);
  }

}
