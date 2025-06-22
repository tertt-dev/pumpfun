use anchor_lang::prelude::*;

declare_id!("Cc3ahaHpu9m7bUxmZptwqdFiGrM1pMJqqmh6fY6zE9m4");

#[program]
pub mod pumpfun_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
