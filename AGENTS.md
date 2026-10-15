<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use individual TanStack content routes with shared site chrome and data-driven detail components so each service and programme has a stable, searchable URL.
- Keep the requested presentation-only enquiry forms client-side and prepare explicit email drafts; never imply an enquiry was delivered or persist personal data without an approved delivery service.
- Define all visual colors and motion styles in the global semantic design system; reduced-motion settings must disable background zoom and reveal animations.
- Illustrative generated lab photography must not be presented as authentic facility or staff photographs.
- Reuse the editorial split and data-driven service showcase for left-content/right-image sections so overview and detail pages share a consistent reading order.
- Resolve default opening photography centrally by pathname and use accessible Radix dropdown controls for desktop navigation so menus close on selection, Escape and outside interaction.
